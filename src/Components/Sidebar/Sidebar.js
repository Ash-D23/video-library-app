import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function Sidebar() {

  return (
    <div className="video-drawer__container video__drawer container--sticky clr--secondary">
        <div className="drawer__navigation text-clr--primary">
            <NavLink
            className={({isActive}) => (isActive ? "sidebar--nav sidebar__active" : 'sidebar--nav')}
            to={`/explore`}
            end
            key={'dashboard'}
            >
                <div className="drawer__navigation-items">
                    <i className='fas fa-play'></i>
                    <p>Dashboard</p>
                </div>
            </NavLink>

            <NavLink
            className={({isActive}) => (isActive ? "sidebar--nav sidebar__active" : 'sidebar--nav')}
            to={`/explore/likes`}
            key={'likes'}
            >
                <div className="drawer__navigation-items">
                    <i className="far fa-thumbs-up"></i>
                    <p>Likes</p>
                </div>
            </NavLink>

            <NavLink
            className={({isActive}) => (isActive ? "sidebar--nav sidebar__active" : 'sidebar--nav')}
            to={`/explore/history`}
            key={'history'}
            >
                <div className="drawer__navigation-items">
                    <i className='fas fa-history'></i>
                    <p>History</p>
                </div> 
            </NavLink>

            <NavLink
            className={({isActive}) => (isActive ? "sidebar--nav sidebar__active" : 'sidebar--nav')}
            to={`/explore/watchlater`}
            key={'watchlater'}
            >
                <div className="drawer__navigation-items">
                    <i className='far fa-clock'></i>
                    <p>Watch later</p>
                </div> 
            </NavLink>

            <NavLink
            className={({isActive}) => (isActive ? "sidebar--nav sidebar__active" : 'sidebar--nav')}
            to={`/explore/playlist`}
            key={'playlist'}
            >
                <div className="drawer__navigation-items">
                    <i className="fas fa-list"></i>
                    <p>Playlist</p>
                </div> 
            </NavLink>      
        </div>
    </div>
    
  )
}

export { Sidebar }

