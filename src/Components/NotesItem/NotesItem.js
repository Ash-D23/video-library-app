import React, {useState} from 'react'
import './NotesItem.css'

function NotesItem({ item, index, removeNote, editNote }) {

  const [editMode, setEditMode] = useState(false)
  const [inputNote, setInputNote] = useState(item.note)

  const handleEdit = () => {
    editNote(item._id, {...item, note: inputNote})
    setEditMode(false)
  }

  const CancelEdit = () => {
    setInputNote(item.note)
    setEditMode(false)
  }

  return editMode ? (
    <div className="noteItem margin-tb--large">
        <div className='container__flex--spacebetween'>
            <p className="note--content">Note {index+1}</p>
            <div>
                <i onClick={handleEdit} className="fas fa-save"></i>
                <i onClick={CancelEdit} className="fas fa-times margin-left--medium"></i>
            </div>
        </div>
        <div className='padding-top--medium'>
            <textarea rows={2} value={inputNote} onChange={(e) => setInputNote(e.target.value)} />
        </div>
    </div>
  ) : (
    <div className="noteItem margin-tb--large">
        <div className='container__flex--spacebetween'>
            <p className="note--content">Note {index+1}</p>
            <div>
                <i onClick={()=>setEditMode(true)} className="fas fa-edit"></i>
                <i onClick={()=>removeNote(item._id)} className="far fa-trash-alt del--icon margin-left--medium"></i>
            </div>
        </div>
        <div className='padding-top--medium'>
            <p>{item.note}</p>
        </div>
    </div>
  )
}

export { NotesItem }