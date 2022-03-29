import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className="video-drawer__container video__drawer container--sticky clr--secondary padding--medium">
            <div className="drawer__navigation text-clr--primary">
                <div className="drawer__navigation-items">
                    <i className='fas fa-play'></i>
                    <Link to="/explore"><p>Dashboard</p></Link>
                </div>   
                <div className="drawer__navigation-items">
                    <i className="far fa-thumbs-up"></i>
                    <Link to="/explore/playlist"><p>Likes</p></Link>
                </div> 
                <div className="drawer__navigation-items">
                    <i className='fas fa-history'></i>
                    <Link to="/explore/playlist"><p>History</p></Link>
                </div> 
                <div className="drawer__navigation-items">
                    <i className='far fa-clock'></i>
                    <Link to="/explore/playlist"><p>Watch later</p></Link>
                </div>     
                <div className="drawer__navigation-items">
                    <i className="fas fa-list"></i>
                    <Link to="/explore/playlist"><p>Playlist</p></Link>
                </div>          
            </div>
        </div>
  )
}

export default Sidebar

