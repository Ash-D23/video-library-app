import React from 'react';
import { CategoryChips, VideoList, Loader } from '../../Components';
import { useVideo } from '../../Context';

function Dashboard() {

  const { filteredvideo, videoState } = useVideo()
  
  return videoState.isLoading ? <Loader /> : (
    <div className="main">
      <CategoryChips />
      <VideoList videos={filteredvideo} />
    </div>
  )
}

export { Dashboard }