import React, {useState} from 'react';
import './CreatePlaylistModal.css'

function CreatePlaylistModal({ showModal, closeModal}) {

  const [Name, setName] = useState('')
  const [Description, setDescription] = useState('')

  const handlecloseModal = () => {
      closeModal()
  }

  const handlesubmit = () => {
      console.log(Name, Description)
  }

  return (
    <div className={`modal__overlay ${showModal ? '' : 'hide'}`}>
      <div className="modal__container">
          <div className="modal__header container__flex margin--medium">
              <h3 className="text--large">Create Playlist</h3>
              <i className="fas fa-times modal__close" onClick={handlecloseModal}></i>
          </div>
          <div className="modal__body margin-bottom--large">
              <div className="padding-right--small">
                <div className="form-element--column">
                    <label className="form-label form-label--required">Enter Playlist Name</label>
                    <input type="text" className="form-field" value={Name} onChange={(e)=> setName(e.target.value)} placeholder="Enter Playlist Name"/>
                </div>
                <div className="form-element--column">
                    <label className="form-label form-label--required">Enter Description</label>
                    <input type="text" className="form-field" value={Description} onChange={(e)=> setDescription(e.target.value)} placeholder="Enter Address"/>
                </div>
              </div>
          </div>
          <div className="modal__actions">
              <button onClick={handlesubmit} className="btn btn--primary border--grey">Submit</button>
              <button onClick={handlecloseModal} className="btn btn--secondary">Cancel</button>
          </div>
      </div>
    </div>
  )
}

export default CreatePlaylistModal

