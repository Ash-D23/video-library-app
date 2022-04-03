import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext, usePlaylist } from '../../Context';
import { AddtoPlaylistModal } from '../AddtoPlaylistModal/AddtoPlaylistModal';
import './VideoCard.css';

function VideoCard({ video, removeHandler, showRemove}) {

  const { title, creator, _id } = video;

  const [showMenu, setshowMenu] = useState(false)
  const [showModal, setshowModal] = useState(false)

  const { user } = useAuthContext()

  const navigate = useNavigate();

  const { addtoHistory, addtoWatchLater, removeFromWatchLater, isVideoInWatchLater } = usePlaylist()

  const checkVideoInWatchLater = isVideoInWatchLater(video?._id)

  const toggleWatchLater = () => {
      if(!user){
          navigate("/login")
          return
      }
      setshowMenu(false)
      checkVideoInWatchLater ? removeFromWatchLater(video?._id) : addtoWatchLater(video) 
  }

  const handleClick = () => {
    if(user){
        addtoHistory(video)
    }
    navigate("/video/"+_id)
  }

  const showPlaylist = () => {
    if(!user){
        navigate("/login")
        return
    }
    setshowMenu(false)
    setshowModal(true)
  }
  
  return (
    <div  className="card card--video margin--medium container--relative">
        <div onClick={handleClick} className="card__image--container container--relative badge-content">
            <img  className="card__image" src="/Images/video.jpg" />
            
            <div className='video-image--overlay'>

            </div>
            <div className="video--play">
                <i className="fab fa-youtube text--large"></i>
            </div>
        </div>
        { showRemove ?  <i onClick={() => removeHandler(_id)} className="fas fa-times clr--primary card--dismiss card-position--tr"></i> : null}
        <div className="card__body padding--medium">
            <div className="card__heading container--relative">
                <div className="container__flex--spacebetween">
                    <p className="text--medium">{title}</p>
                    <i onClick={() => setshowMenu((prev) => !prev)} className="fas fa-ellipsis-v"></i>
                </div>
            </div> 
            {
                showMenu ? <div className='video--menu'>
                       { !checkVideoInWatchLater ? <p onClick={toggleWatchLater} className='margin-bottom--medium'>
                            <i className='far fa-clock margin-lr--small'></i>Watch Later
                        </p> : <p onClick={toggleWatchLater} className='margin-bottom--medium'>
                            <i className="far fa-trash-alt margin-lr--small"></i>Watch Later
                        </p> }
                        <p onClick={showPlaylist}><i className="fas fa-list margin-lr--small"></i>Add to Playlist</p>
                    </div> : null
            }
            <div className="card__description margin-tb--small">
                <p className="clr--grey">{creator}</p>
            </div>
            
        </div> 
        <AddtoPlaylistModal video={video} showModal={showModal} closeModal={() => setshowModal(false)} />
    </div>
  )
}

export { VideoCard }