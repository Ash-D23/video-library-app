import React from 'react';
import { VideoHead, VideoList } from '../../Components';
import { NotFoundPage } from '../NotFoundPage/NotFoundPage';
import { useParams } from 'react-router-dom';
import { usePlaylist } from '../../Context';

function SinglePlaylistPage() {

  const params = useParams()
  const {playlistState, removeVideoFromPlaylist} = usePlaylist()

  const removeVideoHandler = (_id) => removeVideoFromPlaylist(playlistInfo._id, _id)

  const playlistInfo = playlistState.playlists?.find((item) => item._id === params.id)

  return !playlistInfo ? <NotFoundPage /> : (
    <div className="main">
      <VideoHead heading={playlistInfo?.title} description={playlistInfo?.description} />
      <VideoList videos={playlistInfo?.videos} showRemove={true} removeHandler={removeVideoHandler} />
    </div>
  )
}

export { SinglePlaylistPage }