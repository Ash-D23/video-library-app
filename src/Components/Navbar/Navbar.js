import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'

function Navbar({ onMenuClick }) {
  
    const [search, setsearch] = useState('')
  
    let navigate = useNavigate()
  
    const searchHandler = (e) => {
        if(e.keyCode === 13){
            searchSubmit()
        }
    }
  
    const searchSubmit = () => {
      let path = '/search?search='+search
      console.log(path)
      setsearch('')
      navigate(path)
    }
  
    return (
      <header>
          <div className="navbar__container--plain padding-tb--medium">
              <div className="navbar__heading-container">
                  <div className="container__flex--center">
                      <div className="navbar__logo">
                        <i onClick={onMenuClick} className="fas fa-bars icon__menu"></i>
                      </div>
                      <div className="navbar__title text--medium">
                          <Link to="/">Vidbook</Link>

                      </div>
                  </div>
              </div>
              <div className='navbar__logo video--mobile'>
                <Link to="/explore"><i class="fas fa-play-circle clr--secondary padding--small"></i></Link>
              </div>
              <div className='container--relative'>
                          <div className="search__container">
                              <i onClick={searchSubmit} className="fas fa-search padding--small text--medium clr--secondary"></i>
                              <input 
                              onChange={(e)=>setsearch(e.target.value)} 
                              value={search} 
                              className="search__input" 
                              placeholder="Search" 
                              type="text" 
                              onKeyDown={searchHandler}
                              />
                          </div>
                          <div className="search__items">
  
                          </div>
                      </div>
              <ul className="navbar__list-container text--medium margin-top--small">
                  
                  <li className="navbar__item">
                      <Link to="/explore">Explore</Link>
                  </li>
                  <li className="navbar__item">
                      <Link to="/profile">Profile</Link>
                  </li>
                  <li className="navbar__item">
                  <Link to="/logout"><i className="fas fa-sign-out-alt"></i></Link>
                  </li>
                  
              </ul>
          </div>
          <div className='container--relative'>
              <div className="mobile__search__container">
                  <i onClick={searchSubmit} className="fas fa-search padding--small text--medium clr--secondary"></i>
                  <input 
                      onChange={(e)=>setsearch(e.target.value)} 
                      value={search} 
                      className="search__input" 
                      placeholder="Search" 
                      type="text" 
                      onKeyDown={searchHandler}
                      />
              </div>
          </div>
      </header>
    )
}

export default Navbar