import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div class="video-drawer__container video__drawer container--sticky clr--secondary padding--medium">
            <div class="drawer__navigation text-clr--primary">
                <div class="drawer__navigation-items">
                    <i class='fas fa-play'></i>
                    <Link to="/explore"><p>Dashboard</p></Link>
                </div>   
                <div class="drawer__navigation-items">
                    <i class="far fa-thumbs-up"></i>
                    <Link to="/explore/playlist"><p>Likes</p></Link>
                </div> 
                <div class="drawer__navigation-items">
                    <i class='fas fa-history'></i>
                    <Link to="/explore/playlist"><p>History</p></Link>
                </div> 
                <div class="drawer__navigation-items">
                    <i class='far fa-clock'></i>
                    <Link to="/explore/playlist"><p>Watch later</p></Link>
                </div>     
                <div class="drawer__navigation-items">
                    <i class="fas fa-list"></i>
                    <Link to="/explore/playlist"><p>Playlist</p></Link>
                </div>          
            </div>
        </div>
  )
}

export default Sidebar

