import React from 'react';
import { Link } from 'react-router-dom';
import './Drawer.css';
function Drawer({ show, closeDrawer}) {
  return (
      <div className={`drawer__container padding--medium ${ show ? 'drawer__position-right' : ''}`}>
        <div className="drawer__heading container__flex--center">
            <div className="navbar__logo margin-top--small">
                <i className="fas fa-tv"></i>
            </div>
            <div className="navbar__title text--medium">
                Vidook
            </div>
            <div className="navbar__logo drawer__clear margin-top--small">
                <i onClick={closeDrawer} className="fas fa-times"></i>
            </div>
        </div>
        <div className="drawer__navigation">
            <div className="drawer__navigation-items">
                <i className="fas fa-home"></i>
                <Link onClick={closeDrawer} to="/"><p>Home</p></Link>
            </div>
            <div className="drawer__navigation-items">
            <i className="fas fa-play-circle"></i>
                <Link onClick={closeDrawer} to="/explore"><p>Explore</p></Link>
            </div>
            <div className="drawer__navigation-items">
                <i className="fas fa-user"></i>
                <Link onClick={closeDrawer} to="/profile"><p>Profile</p></Link>
            </div>
            <div className="drawer__navigation-items">
                <i className="fas fa-sign-out-alt"></i>
                <Link onClick={closeDrawer} to="/logout"><p>Logout</p></Link>
            </div>
        </div>
      </div>
  )
}

export default Drawer