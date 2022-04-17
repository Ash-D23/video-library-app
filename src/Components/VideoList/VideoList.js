import React, {useState} from 'react'
import { VideoCard } from '../VideoCard/VideoCard';
import './VideoList.css'
import { AddtoPlaylistModal } from '../AddtoPlaylistModal/AddtoPlaylistModal';

function VideoList({ videos, showRemove, removeHandler }) {

  const [showModal, setshowModal] = useState(false)
  const [Playlistvideo, setPlaylistvideo] = useState(null)

  const showPlaylist = (video) => {
    setPlaylistvideo(video)
    setshowModal(true)
  }

  return (
    <div className="container__flex--center container__flex--wrap video__list--container">
      {videos?.map((video)=>{
        return <VideoCard key={video._id} video={video} showRemove={showRemove} removeHandler={removeHandler} showPlaylist={showPlaylist} />
      })}
      {videos.length === 0 ? (
        <div className='empty-list--container'>
          <img src="/Images/blank.svg" alt="not found" />
          <h2 className='text--center padding--medium'>No Items Found</h2>
        </div>
      ) : null}
      <AddtoPlaylistModal video={Playlistvideo} showModal={showModal} closeModal={() => setshowModal(false)} />
    </div>
  )
}

export { VideoList }