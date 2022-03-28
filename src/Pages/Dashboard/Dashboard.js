import React from 'react';
import CategoryChips from '../../Components/CategoryChips/CategoryChips';
import VideoList from '../../Components/VideoList/VideoList';
import { useVideo } from '../../Context/VideoContext/VideoContext';

function Dashboard() {

  const { filteredvideo } = useVideo()
  
  return (
    <div className="main">
      <CategoryChips />
      <VideoList videos={filteredvideo} />
    </div>
  )
}

export default Dashboard