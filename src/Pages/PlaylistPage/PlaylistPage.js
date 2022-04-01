import React, { useEffect } from 'react';
import { usePlaylist } from '../../Context/PlaylistContext/PlaylistContext';
import PlaylistCard from '../../Components/PlaylistCard/PlaylistCard';
import './PlaylistPage.css';

function PlaylistPage() {

  const { playlistState, createNewPlaylist } = usePlaylist()

  return (
    <div className="main">
      <div className='playlist--heading'>
        <h2 className="video__title clr--secondary margin-tb--large">Playlists</h2>
        <button onClick={()=> createNewPlaylist({ title: 'fjf', description: 'fdvf'})} className="btn btn--secondary margin-right--medium">Create Playlist</button>
      </div>

      <div className='container__flex--center container__flex--wrap padding-top--large'>
        {playlistState.playlists?.map((item)=> <PlaylistCard playlist={item} />)}
      </div>
    </div>
  )
}

export default PlaylistPage