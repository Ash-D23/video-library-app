import React from 'react';
import { useNavigate } from 'react-router-dom';
import './VideoCard.css';

function VideoCard({ video}) {

  const { title, creator, _id } = video;

  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/video/"+_id)} className="card card--video margin--medium">
        <div className="card__image--container container--relative badge-content">
            <img className="card__image" src="/Images/video.jpg" />
            
            <div className='video-image--overlay'>

            </div>
            <div className="video--play">
                <i className="fab fa-youtube text--large"></i>
            </div>
        </div>
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

export default VideoCard