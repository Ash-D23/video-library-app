import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePlaylist } from '../../Context';
import './PlaylistCard.css'

function PlaylistCard({ playlist: { title, _id, description, videos } }) {

  const { removeFromPlaylists } = usePlaylist()
  
  const navigate = useNavigate();

  return (
    <div className="playlist-card__container pointer margin--medium">
      <div onClick={()=>navigate('/explore/playlist/'+_id)} className='playlist-card__image'>
        <img src="/Images/list.svg" />
      </div>
      <div className='playlist-card__body'>
        <div onClick={()=>navigate('/explore/playlist/'+_id)} >
          <p className='margin-bottom--medium'>{title}</p>
          <p>{`${videos.length} Videos`}</p>
        </div>
        <div className='margin-right--small playlist-card--delete'>
          <i onClick={()=> removeFromPlaylists(_id)} className="far fa-trash-alt"></i>
        </div>
      </div>
    </div>
  )
}

export { PlaylistCard }