import React from 'react'
import { usePlaylist } from '../../Context'

function AddtoPlaylistModal({ showModal, closeModal, video}) {

  const { playlistState, addVideoToPlaylist } = usePlaylist()

  const handlePlaylistClick = (_id) => {
    addVideoToPlaylist(video, _id)
    closeModal()
  }

  return (
    <div className={`modal__overlay addPlaylist ${showModal ? '' : 'hide'}`}>
      <div className="modal__container">
      <div className="modal__header container__flex--center margin--medium">
              <h3 className="text--large">Add to Playlist</h3>
              <i className="fas fa-times modal__close" onClick={closeModal}></i>
          </div>
          <div className="modal__body margin-tb--large">
              <div className="playlist__body padding-right--small">
                {playlistState.playlists?.map((item) => {
                  return <div key={item._id} onClick={() => handlePlaylistClick(item._id)} className='playlist--item padding-tb--medium'>
                    <p className='text--center'>{item.title}</p>
                </div>
                })}

                {playlistState.playlists.length === 0 ? (
                  <div>
                    <p className='margin--medium text--center'>No Playlists Found</p>
                  </div>
                ) : null}
              </div>
          </div>
          <div className="container__flex--center">
              <button onClick={closeModal} className="btn btn--secondary">Cancel</button>
          </div>
      </div>
    </div>
  )
}

export { AddtoPlaylistModal }