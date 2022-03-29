import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './VideoListingPage.css'

function VideoListingPage() {
  return (
    <>
      <div className="video__main">
        <Sidebar />
        <Outlet />
      </div>
    </>
  )
}

export default VideoListingPage