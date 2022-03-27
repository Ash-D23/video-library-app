import React from 'react';
import './VideoCard.css';

function VideoCard() {
  return (
    <div class="card card--video margin--medium">
        <div className="card__image--container container--relative badge-content">
            <img onClick={null} class="card__image" src="/Images/video.jpg" />
            
            <div className='video-image--overlay'>

            </div>
            <div class="video--play">
                <i class="fab fa-youtube text--large"></i>
            </div>
        </div>
        <div class="card__body padding--medium">
            <div class="card__heading margin-tb--small">
                <div class="container__flex--spacebetween">
                    <p class="text--medium">Video Name</p>
                    <p>3 min</p>
                </div>
            </div> 
            <div class="card__description margin-bottom--small">
                <p class="clr--grey">Name</p>
            </div>
            
        </div> 
    </div>
  )
}

export default VideoCard