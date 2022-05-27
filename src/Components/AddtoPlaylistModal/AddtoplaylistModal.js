import React, { useState } from 'react'
import { usePlaylist } from '../../Context'
import { toasterror } from '../../Utilities'

function AddtoPlaylistModal({ showModal, closeModal, video}) {

  const [ showPlaylistInput, setshowPlaylistInput ] = useState(false)
  const [ playlistInput, setPlaylistInput ] = useState('')

  const { playlistState, addVideoToPlaylist , createNewPlaylist} = usePlaylist()

  const handlePlaylistClick = (_id) => {
    addVideoToPlaylist(video, _id)
    handleClose()
  }

  const handleClose = () => {
    setPlaylistInput('')
    setshowPlaylistInput(false)
    closeModal()
  }

  const handleSubmit = () => {
    if(playlistInput === ''){
      toasterror("Enter Name")
      return 
    }

    createNewPlaylist({ title: playlistInput })
    setPlaylistInput('')
  }

  const handleModalClickOutside = (e) => {
    if(e.target.id === "modal--outside" ){
      handleClose()
    }
  }

  return (
    <div id="modal--outside" onClick={handleModalClickOutside} className={`modal__overlay addPlaylist ${showModal ? '' : 'hide'}`}>
      <div className="modal__container">
      <div className="modal__header container__flex--center margin--medium">
              <h3 className="text--large">Add to Playlist</h3>
              <i className="fas fa-times modal__close" onClick={handleClose}></i>
          </div>
          <div className="modal__body margin-tb--large">
              <div className='container__flex--center padding-bottom--medium'>
                <button onClick={ () => setshowPlaylistInput(true) } className='btn btn--secondary'>Create Playlist</button>
              </div>
              { showPlaylistInput ? 
              <div className='padding-bottom--medium playlist__input--container'>
                <input className='playlist__input' onChange={(e)=> setPlaylistInput(e.target.value)} value={playlistInput} placeholder='Enter Playlist Name'/>
                <button onClick={handleSubmit} className='btn btn--secondary'>Add</button>
              </div> : null }
              <div className="playlist__body">
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
              <button onClick={handleClose} className="btn btn--secondary">Close</button>
          </div>
      </div>
    </div>
  )
}

export { AddtoPlaylistModal }