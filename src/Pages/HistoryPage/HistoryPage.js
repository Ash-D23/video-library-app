import React from 'react';
import { VideoHead, VideoList } from '../../Components';
import { usePlaylist } from '../../Context';

function HistoryPage() {
  const { playlistState, removeFromHistory, removeAllHistory } = usePlaylist()

  return (
    <div className="main">
      <VideoHead heading={"History"} description={"List of videos in User's History"} />
      { playlistState.history?.length === 0 ? null : <div className='container__flex--center padding--large'>
        <button onClick={removeAllHistory} className="btn btn--secondary">Clear History</button>
      </div> }
      <VideoList videos={playlistState.history} showRemove={true} removeHandler={removeFromHistory} />
    </div>
  )
}

export { HistoryPage }