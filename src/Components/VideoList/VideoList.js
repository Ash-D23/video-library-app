import React from 'react'
import { useVideo } from '../../Context/VideoContext/VideoContext';
import VideoCard from '../VideoCard/VideoCard';
import './VideoList.css'

function VideoList() {

  const { video } = useVideo()

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