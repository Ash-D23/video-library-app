import React from 'react'
import VideoList from '../../Components/VideoList/VideoList';
import VideoHead from '../../Components/VideoHead/VideoHead';
import { usePlaylist } from '../../Context/PlaylistContext/PlaylistContext'

function LikePage() {

  const { playlistState, removeFromLikes } = usePlaylist()
  
  return (
    <div className="main">
      <VideoHead heading={"Likes"} description={"List of videos liked by user"} />
      <VideoList videos={playlistState.likes} remove={true} removefn={removeFromLikes} />
    </div>
  )
}

export default LikePage