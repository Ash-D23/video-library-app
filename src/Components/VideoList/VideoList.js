import React from 'react'
import { VideoCard } from '../VideoCard/VideoCard';
import './VideoList.css'

function VideoList({ videos, showRemove, removeHandler }) {

  return (
    <div className="container__flex--center container__flex--wrap">
      {videos?.map((video)=>{
        return <VideoCard key={video._id} video={video} showRemove={showRemove} removeHandler={removeHandler} />
      })}
      {videos.length === 0 ? (
        <div className='empty-list--container'>
          <img src="/Images/blank.svg" />
          <h2 className='text--center padding--medium'>No Items Found</h2>
        </div>
      ) : null}
    </div>
  )
}

export { VideoList }