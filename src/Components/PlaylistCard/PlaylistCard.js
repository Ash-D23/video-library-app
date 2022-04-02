import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePlaylist } from '../../Context';
import './PlaylistCard.css'

function PlaylistCard({ playlist: { title, _id, description, videos } }) {

  const { removeFromPlaylists } = usePlaylist()
  
  const navigate = useNavigate();

  return (
    <div className="playlist-card__container margin--medium">
      <div onClick={()=>navigate('/explore/playlist/'+_id)} >
        <p className='margin-bottom--medium'>{title}</p>
        <p>Videos: {videos.length}</p>
      </div>
      <div>
        <i onClick={()=> removeFromPlaylists(_id)} className="far fa-trash-alt"></i>
      </div>
    </div>
  )
}

export { PlaylistCard }