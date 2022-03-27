import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './VideoListingPage.css'

function VideoListingPage() {
  return (
    <>
      <div class="video__main">
        <Sidebar />
        <Outlet />
      </div>
    </>
  )
}

export default VideoListingPage