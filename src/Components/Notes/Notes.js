import React, {useState} from 'react'

function Notes() {

  const [notes, setnotes] = useState([])
  const [inputNote, setinputNote] = useState('')

  const handleSubmit = () => {
    let index = notes.length
    const noteObj = { id: index, note: inputNote}
    setnotes([...notes, noteObj])
    setinputNote('')
  }

  const removeNote = (id) => {
    setnotes(notes.filter((item) => item.id !== id))
  }

  return (
    <div className="notes--section">
        <div className="notes__container">
            <div className="note__input--container margin-tb--large">          
                <input onChange={(e)=> setinputNote(e.target.value)} value={inputNote} className="note__input margin-right--medium" placeholder="Enter Note" />
                <button onClick={handleSubmit} className="btn btn--secondary">Submit</button>
            </div> 
            <div className="padding-top--small">
              {notes?.map((item)=>{
                return (<div key={item.id} className="container__flex--spacebetween margin-tb--large">
                  <p className="note--content">{item.note}</p>
                  <i onClick={()=>removeNote(item.id)} className="far fa-trash-alt pointer"></i>
              </div>)
              })}
            </div>
        </div>
      </div>
  )
}

export { Notes }