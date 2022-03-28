import React from 'react'
import VideoCard from '../VideoCard/VideoCard';
import './VideoList.css'

function VideoList() {
  return (
    <div class="container__flex--center container__flex--wrap">
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  )
}

export default VideoList