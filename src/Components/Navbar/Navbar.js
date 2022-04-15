import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext, useVideo } from '../../Context';
import './Navbar.css';

function Navbar({ onMenuClick }) {
  
    const [search, setsearch] = useState('')
    const [showSearchItems, setshowSearchItems] = useState(false)
  
    let navigate = useNavigate()
  
    const searchHandler = (e) => {
        if(e.keyCode === 13){
            searchSubmit()
        }
    }
  
    const searchSubmit = () => {
      let path = '/search?search='+search
      setsearch('')
      setshowSearchItems(false)
      navigate(path)
    }

    const { user } = useAuthContext()

    const { videoState } = useVideo();

    const filterVideoBySearch = (videos, search) => {
        if(search === null){
            return videos
        }

        return videos.filter((item) => item.title.toLowerCase().includes(search.toLowerCase() ))
    }

    const handleNavigate = (e, id) => {
        setshowSearchItems(false)
        navigate('/video/'+id)
    }

    const handleClear = () => {
        setsearch('')
        setshowSearchItems(false)
    }

    const SearchVideos = filterVideoBySearch(videoState.videos, search)
    
    return (
      <header>
          <div className="navbar__container--plain padding-tb--medium">
              <div className="navbar__heading-container">
                  <div className="container__flex--center">
                      <div className="navbar__logo">
                        <i onClick={onMenuClick} className="fas fa-bars icon__menu"></i>
                        <i className="fas fa-play-circle icon__play"></i>
                      </div>
                      <div className="navbar__title text--medium">
                          <Link to="/">Vidbook</Link>
                      </div>
                  </div>
              </div>
              <div className='navbar__logo video--mobile'>
                <Link to="/explore"><i className="fas fa-play-circle clr--secondary padding--small"></i></Link>
              </div>
                <div className='container--relative'>
                    <div className="search__container">
                        <i onClick={searchSubmit} className="fas fa-search padding--small text--medium clr--secondary"></i>
                        <input 
                        onChange={(e)=>setsearch(e.target.value)} 
                        onFocus={() => setshowSearchItems(true)}
                        value={search} 
                        className="search__input" 
                        placeholder="Search" 
                        type="text" 
                        onKeyDown={searchHandler}
                        />
                        { showSearchItems ? <i onClick={handleClear} className="fas fa-times padding--small text--medium clr--secondary pointer"></i> : null }
                    </div>
                    { SearchVideos.length === 0 ? 
                    <div style={{ height: `2rem`}}
                    className={`search__items ${ showSearchItems ? `search__items--display` : ''}`}>
                       <p className='search__items--list text--center'>No videos Found</p>
                   </div>
                    : <div style={{ height: `${2 + SearchVideos.length*2}rem`}}
                     className={`search__items ${ showSearchItems ? `search__items--display` : ''}`}>
                        {SearchVideos?.map((item) => <p onClick={(e) => handleNavigate(e, item?._id)} className='search__items--list'>{item.title}</p>)}
                    </div>}
                </div>
              <ul className="navbar__list-container text--medium margin-top--small">
                  
                  <li className="navbar__item">
                    <Link to="/explore">Explore</Link>
                  </li>    
                  { user ? <li className="navbar__item">
                      <Link to="/profile">Profile</Link>
                  </li> : null }

                  { user ? <li className="navbar__item">
                  <Link to="/logout"><i className="fas fa-sign-out-alt"></i></Link>
                  </li> : <Link to="/login"><button className='btn btn--secondary btn--medium'>Login</button></Link>}
                  
              </ul>
          </div>
          <div className='container--relative'>
              <div className="mobile__search__container">
                  <i onClick={searchSubmit} className="fas fa-search padding--small text--medium clr--secondary"></i>
                  <input 
                      onChange={(e)=>setsearch(e.target.value)} 
                      value={search} 
                      onFocus={() => setshowSearchItems(true)}
                      className="search__input" 
                      placeholder="Search" 
                      type="text" 
                      onKeyDown={searchHandler}
                      />
                    { showSearchItems ? <i onClick={handleClear} className="fas fa-times padding--small text--medium clr--secondary pointer"></i> : null }
              </div>
              { SearchVideos.length === 0 ? 
                    <div style={{ height: `2rem`}}
                    className={`search__items ${ showSearchItems ? `search__items--mobiledisplay` : ''}`}>
                       <p className='search__items--list text--center'>No videos Found</p>
                   </div>
                    : <div style={{ height: `${2 + SearchVideos.length*2}rem`}}
                     className={`search__items ${ showSearchItems ? `search__items--mobiledisplay` : ''}`}>
                        {SearchVideos?.map((item) => <p onClick={(e) => handleNavigate(e, item?._id)} className='search__items--list'>{item.title}</p>)}
              </div>}
          </div>
      </header>
    )
}

export { Navbar }