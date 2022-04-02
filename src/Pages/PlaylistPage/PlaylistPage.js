import React, { useState } from 'react';
import { usePlaylist } from '../../Context';
import { PlaylistCard, CreatePlaylistModal } from '../../Components';
import './PlaylistPage.css';

function PlaylistPage() {

  const { playlistState } = usePlaylist()

  const [showModal, setshowModal] = useState(false)

  return (
    <div className="main">
      <div className='playlist--heading'>
        <h2 className="video__title clr--secondary margin-tb--large">Playlists</h2>
        <button onClick={()=> setshowModal(true)} className="btn btn--secondary margin-right--medium">Create Playlist</button>
      </div>
      <div className='container__flex--center container__flex--wrap padding-top--large'>
        {playlistState.playlists?.map((item)=> <PlaylistCard key={item._id} playlist={item} />)}
      </div>
      <CreatePlaylistModal showModal={showModal} closeModal={() => setshowModal(false)} />
    </div>
  )
}

export { PlaylistPage }