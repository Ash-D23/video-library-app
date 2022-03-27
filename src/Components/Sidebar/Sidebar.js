import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div class="video-drawer__container video__drawer container--sticky clr--secondary padding--medium">
            <div class="drawer__navigation text-clr--primary">
                <div class="drawer__heading">
                    <h3 class="video__title margin-bottom--small">Categories</h3>
                </div>
                <div class="drawer__navigation-items">
                    <i class='fas fa-play'></i>
                    <Link to="/explore"><p>Dashboard</p></Link>
                </div>   
                <div class="drawer__navigation-items">
                    <i class="fas fa-film"></i>
                    <Link to="/explore/category"><p>Category 1</p></Link>
                </div>
                <div class="drawer__navigation-items">
                    <i class="fas fa-film"></i>
                    <Link to="/explore/category"><p>Category 2</p></Link>
                </div>
                <div class="drawer__navigation-items">
                    <i class="fas fa-film"></i>
                    <Link to="/explore/category"><p>Category 3</p></Link>
                </div>
                <div class="drawer__navigation-items">
                    <i class="fas fa-film"></i>
                    <Link to="/explore/category"><p>Category 4</p></Link>
                </div>
                            
            </div>
            <hr />
            <div class="drawer__navigation text-clr--primary">
                <div class="drawer__heading">
                    <h3 class="video__title margin-bottom--small">Playlist</h3>
                </div>
                <div class="drawer__navigation-items">
                    <i class='far fa-heart'></i>
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
                    <Link to="/explore/playlist"><p>Playlist 1</p></Link>
                </div>  
                <div class="drawer__navigation-items">
                    <i class="fas fa-list"></i>
                    <Link to="/explore/playlist"><p>Playlist 2</p></Link>
                </div> 
                <div class="drawer__navigation-items">
                    <i class="fas fa-list"></i>
                    <Link to="/explore/playlist"><p>Playlist 3</p></Link>
                </div>      
            </div>
            
        </div>
  )
}

export default Sidebar

