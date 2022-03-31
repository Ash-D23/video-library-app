import React from 'react';
import VideoList from '../../Components/VideoList/VideoList';
import VideoHead from '../../Components/VideoHead/VideoHead';
import { usePlaylist } from '../../Context/PlaylistContext/PlaylistContext'

function HistoryPage() {
  const { playlistState, removeFromHistory, removeAllHistory } = usePlaylist()
  return (
    <div className="main">
      <VideoHead heading={"History"} description={"List of videos in User's History"} />
      <div className='container__flex--center padding--large'>
        <button onClick={removeAllHistory} className="btn btn--secondary">Clear History</button>
      </div>
      <VideoList videos={playlistState.history} remove={true} removefn={removeFromHistory} />
    </div>
  )
}

export default HistoryPage