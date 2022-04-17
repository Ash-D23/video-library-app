import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Loader, Notes, AddtoPlaylistModal } from '../../Components';
import { useAuthContext, usePlaylist } from '../../Context';
import './SingleVideoPage.css';

function SingleVideoPage() {

  const [singlevideo, setsinglevideo] = useState({})
  const [showModal, setshowModal] = useState(false)
  const [isLoading, setisLoading] = useState(true)

  const { user } = useAuthContext()

  const navigate = useNavigate()

  const getSingleVideo = async () => {
    try{
      let result = await axios.get('/api/video/'+params.id)
      setsinglevideo(result.data?.video)
      setisLoading(false)
    }catch(err){
      console.error(err)
      setisLoading(false)
    }
  }

  useEffect(() => {
    getSingleVideo()
  }, [])

  const onAddtoPlaylist = () => {
    if(!user){
      navigate('/login')
      return 
    }
    setshowModal(true)
  }

  const params = useParams()

  const { addtoLikes, removeFromLikes, isVideoInLikes,
    addtoWatchLater, removeFromWatchLater, isVideoInWatchLater } = usePlaylist()

  const checkVideoInLikes = isVideoInLikes(singlevideo?._id)

  const checkVideoInWatchLater = isVideoInWatchLater(singlevideo?._id)

  const toggleLike = () => {
    if(!user){
      navigate('/login')
      return 
    }
    checkVideoInLikes ? removeFromLikes(singlevideo?._id) : addtoLikes(singlevideo)
  }

  const toggleWatchLater = () => {
    if(!user){
      navigate('/login')
      return 
    }
    checkVideoInWatchLater ? removeFromWatchLater(singlevideo?._id) : addtoWatchLater(singlevideo)
  }

  return isLoading ? <Loader /> : (
    <div className='single-video__container'>
      <div className="single-video--content">
          <div className="single-video">
            
            <iframe src={singlevideo?.url}>
            </iframe>
            
            <div className="single-video--info">
                <h3>{singlevideo.title} | by {singlevideo?.creator}</h3>
                <div className="single-video--actions">
                  <div className="single-video--actions--container">
                    <div onClick={toggleLike} className={`single-video--action ${checkVideoInLikes ? 'video--active' : null}`}>
                      { checkVideoInLikes ? <i className="fas fa-thumbs-up"></i> : <i className="far fa-thumbs-up"></i>}
                      <p className="margin-left--small">Like</p>
                    </div>
                    <div onClick={toggleWatchLater} className={`single-video--action ${checkVideoInWatchLater ? 'video--active' : null}`}>
                      <i className="far fa-clock"></i>
                      <p className="margin-left--small">Watch Later</p>
                    </div>
                    <div onClick={onAddtoPlaylist} className="single-video--action">
                      <i className="fas fa-list"></i>
                      <p className="margin-left--small">Add to Playlist</p>
                    </div>
                  </div>
                  <div>
                    Views | 4 hous ago
                  </div>
                </div>
            </div>

            <div className="single-video--description">
              <h3>Description</h3>
              <p className="padding-tb--small">{singlevideo?.description}</p>
            </div>
          </div>
      </div>
      <Notes videoId={params.id} />
      <AddtoPlaylistModal video={singlevideo} showModal={showModal} closeModal={() => setshowModal(false)} />
    </div>
  )
}

export { SingleVideoPage };