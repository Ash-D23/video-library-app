import React from 'react'
import { VideoList, VideoHead } from '../../Components';
import { usePlaylist } from '../../Context'

function WatchLaterPage() {

  const { playlistState, removeFromWatchLater } = usePlaylist()

  return (
    <div className="main">
      <VideoHead heading={"Watch Later"} description={"List of videos added to Watch later"} />
      <VideoList videos={playlistState.watchLater} showRemove={true} removeHandler={removeFromWatchLater} />
    </div>
  )
}

export { WatchLaterPage }