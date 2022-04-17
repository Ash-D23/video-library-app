import React from 'react';
import { CategoryChips, VideoList, Loader } from '../../Components';
import { useVideo } from '../../Context';

function Dashboard() {

  const { filteredvideo, videoState } = useVideo()
  
  return videoState.isLoading ? <div className='videolist--loading'><Loader /></div> : (
    <div className="main">
      <CategoryChips />
      <VideoList videos={filteredvideo} />
    </div>
  )
}

export { Dashboard }