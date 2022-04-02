import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePlaylist } from '../../Context';
import './VideoCard.css';

function VideoCard({ video, removeHandler, showRemove}) {

  const { title, creator, _id } = video;

  const { addtoHistory } = usePlaylist()

  const navigate = useNavigate();

  const handleClick = () => {
    addtoHistory(video)
    navigate("/video/"+_id)
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
            <div className="card__heading margin-tb--small">
                <div className="container__flex--spacebetween">
                    <p className="text--medium">{title}</p>
                    <i className="fas fa-ellipsis-v"></i>
                </div>
            </div> 
            <div className="card__description margin-bottom--small">
                <p className="clr--grey">{creator}</p>
            </div>
            
        </div> 
    </div>
  )
}

export { VideoCard }