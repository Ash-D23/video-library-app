import React from 'react'
import { Link } from 'react-router-dom';

function Sidebar() {

  return (
    <div className="video-drawer__container video__drawer container--sticky clr--secondary">
        <div className="drawer__navigation text-clr--primary">
            <Link to="/explore">
                <div className="drawer__navigation-items">
                    <i className='fas fa-play'></i>
                    <p>Dashboard</p>
                </div>
            </Link>
            <Link to="/explore/playlist">
                <div className="drawer__navigation-items">
                    <i className="far fa-thumbs-up"></i>
                    <p>Likes</p>
                </div>
            </Link>
            <Link to="/explore/playlist">
                <div className="drawer__navigation-items">
                    <i className='fas fa-history'></i>
                    <p>History</p>
                </div> 
            </Link>
            <Link to="/explore/playlist">
                <div className="drawer__navigation-items">
                    <i className='far fa-clock'></i>
                    <p>Watch later</p>
                </div>    
            </Link> 
            <Link to="/explore/playlist">
                <div className="drawer__navigation-items">
                    <i className="fas fa-list"></i>
                    <p>Playlist</p>
                </div>   
            </Link>       
        </div>
    </div>
    
  )
}

export default Sidebar

