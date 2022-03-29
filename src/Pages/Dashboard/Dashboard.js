import React from 'react';
import CategoryChips from '../../Components/CategoryChips/CategoryChips';
import VideoList from '../../Components/VideoList/VideoList';
import Loader from '../../Components/Loader/Loader';
import { useVideo } from '../../Context/VideoContext/VideoContext';

function Dashboard() {

  const { filteredvideo, videoState } = useVideo()
  
  return videoState.isLoading ? <Loader /> : (
    <div className="main">
      <CategoryChips />
      <VideoList videos={filteredvideo} />
    </div>
  )
}

export default Dashboard