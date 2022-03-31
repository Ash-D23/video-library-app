import React from 'react'
import VideoHead from '../../Components/VideoHead/VideoHead'
import VideoList from '../../Components/VideoList/VideoList'
import { usePlaylist } from '../../Context/PlaylistContext/PlaylistContext'

function WatchLaterPage() {

  const { playlistState, removeFromWatchLater } = usePlaylist()

  return (
    <div className="main">
      <VideoHead heading={"Watch Later"} description={"List of videos added to Watch later"} />
      <VideoList videos={playlistState.watchLater} remove={true} removefn={removeFromWatchLater} />
    </div>
  )
}

export default WatchLaterPage