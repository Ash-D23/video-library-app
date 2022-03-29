import React from 'react';
import { useNavigate } from 'react-router-dom';
import './VideoCard.css';

function VideoCard({ video}) {

  const { title, creator, _id } = video;

  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/video/"+_id)} class="card card--video margin--medium">
        <div className="card__image--container container--relative badge-content">
            <img class="card__image" src="/Images/video.jpg" />
            
            <div className='video-image--overlay'>

            </div>
            <div class="video--play">
                <i class="fab fa-youtube text--large"></i>
            </div>
        </div>
        <div class="card__body padding--medium">
            <div class="card__heading margin-tb--small">
                <div class="container__flex--spacebetween">
                    <p class="text--medium">{title}</p>
                    <i class="fas fa-ellipsis-v"></i>
                </div>
            </div> 
            <div class="card__description margin-bottom--small">
                <p class="clr--grey">{creator}</p>
            </div>
            
        </div> 
    </div>
  )
}

export default VideoCard