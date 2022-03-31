import React from 'react'
import VideoCard from '../VideoCard/VideoCard';
import './VideoList.css'

function VideoList({ videos, remove, removefn }) {

  return (
    <div className="container__flex--center container__flex--wrap">
      {videos?.map((video)=>{
        return <VideoCard key={video._id} video={video} remove={remove} removefn={removefn} />
      })}
    </div>
  )
}

export default VideoList