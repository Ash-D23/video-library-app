import React from 'react';
import CategoryChips from '../../Components/CategoryChips/CategoryChips';
import VideoList from '../../Components/VideoList/VideoList';

function Dashboard() {
  return (
    <div className="main">
      <CategoryChips />
      <VideoList />
    </div>
  )
}

export default Dashboard