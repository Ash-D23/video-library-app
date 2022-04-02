import React from 'react'
import { VideoCard } from '../VideoCard/VideoCard';
import './VideoList.css'

function VideoList({ videos, showRemove, removeHandler }) {

  return (
    <div className="container__flex--center container__flex--wrap">
      {videos?.map((video)=>{
        return <VideoCard key={video._id} video={video} showRemove={showRemove} removeHandler={removeHandler} />
      })}
    </div>
  )
}

export { VideoList }