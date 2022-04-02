import React from 'react'
import { VideoHead, VideoList } from '../../Components';
import { usePlaylist } from '../../Context'

function LikePage() {

  const { playlistState, removeFromLikes } = usePlaylist()
  
  return (
    <div className="main">
      <VideoHead heading={"Likes"} description={"List of videos liked by user"} />
      <VideoList videos={playlistState.likes} showRemove={true} removeHandler={removeFromLikes} />
    </div>
  )
}

export { LikePage }