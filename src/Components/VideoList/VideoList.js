import React from 'react'
import VideoCard from '../VideoCard/VideoCard';
import './VideoList.css'

function VideoList() {
  return (
    <div class="main">
        <div class="main--heading">
           <h2 class="video__title clr--secondary margin-tb--large">Heading</h2>
           <p class="text--large margin-tb--large">Description</p>
        </div>

        <div class="container__flex--center container__flex--wrap">
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          
        </div>
    </div>
  )
}

export default VideoList