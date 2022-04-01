import React from 'react'

function Addtoplaylist({ showModal, closeModal}) {
    const handlecloseModal = () => {
        closeModal()
    }
  
    const handlesubmit = () => {
    }
  return (
    <div className={`modal__overlay addPlaylist ${showModal ? '' : 'hide'}`}>
      <div className="modal__container">
      <div className="modal__header container__flex--center margin--medium">
              <h3 className="text--large">Add to Playlist</h3>
              <i className="fas fa-times modal__close" onClick={handlecloseModal}></i>
          </div>
          <div className="modal__body margin-tb--large">
              <div className="playlist__body padding-right--small">
                <div className='playlist--item padding-tb--medium'>
                    <p className='text--center'>Playlist Name</p>
                </div>
              </div>
          </div>
          <div className="container__flex--center">
              <button onClick={handlecloseModal} className="btn btn--secondary">Cancel</button>
          </div>
      </div>
    </div>
  )
}

export default Addtoplaylist