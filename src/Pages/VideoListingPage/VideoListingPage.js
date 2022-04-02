import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../Components/Sidebar/Sidebar';
import { VideoProvider } from '../../Context';
import './VideoListingPage.css';

function VideoListingPage() {
  return (
    <VideoProvider>
      <div className="video__main">
        <Sidebar />
        <Outlet />
      </div>
    </VideoProvider>
  )
}

export { VideoListingPage }