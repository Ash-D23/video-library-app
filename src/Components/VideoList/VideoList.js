import React from 'react'
import { useVideo } from '../../Context/VideoContext/VideoContext';
import VideoCard from '../VideoCard/VideoCard';
import './VideoList.css'

function VideoList({ videos }) {

  return (
    <div className="container__flex--center container__flex--wrap">
      {videos?.map((video)=>{
        return <VideoCard key={video._id} video={video} />
      })}
    </div>
  )
}

export default VideoList