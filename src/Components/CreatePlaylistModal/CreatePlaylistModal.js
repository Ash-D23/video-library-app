import React, {useState} from 'react';
import { usePlaylist } from '../../Context';
import './CreatePlaylistModal.css'

function CreatePlaylistModal({ showModal, closeModal}) {

  const { createNewPlaylist } = usePlaylist()

  const [Name, setName] = useState('')
  const [Description, setDescription] = useState('')
  const [errorvalues, seterrorvalues] = useState({})

  const reset = () => {
    setName('')
    setDescription('')
  }

  const handlecloseModal = () => {
      reset()
      closeModal()
  }

  const validateSubmit = () => {
    const errors = {}

    if(Name.length === 0){
      errors.Name = "Name Required"
    }

    if(Description.length === 0){
      errors.Description = "Description Required"
    }

    return errors
  }

  const handlesubmit = () => {

    const errors = validateSubmit()

    if(Object.keys(errors).length === 0){
      createNewPlaylist({ title: Name, description: Description})
      reset()
      closeModal()
    }else{
      seterrorvalues(errors)
    }
    
  }

  return (
    <div className={`modal__overlay createPlaylistModal ${showModal ? '' : 'hide'}`}>
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
                    <span className="error--message margin--small">{errorvalues.Name}</span>
                </div>
                <div className="form-element--column">
                    <label className="form-label form-label--required">Enter Description</label>
                    <input type="text" className="form-field" value={Description} onChange={(e)=> setDescription(e.target.value)} placeholder="Enter Address"/>
                    <span className="error--message margin--small">{errorvalues.Description}</span>
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

export { CreatePlaylistModal }

