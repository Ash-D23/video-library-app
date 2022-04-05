import axios from 'axios'
import React, { useState, useEffect  } from 'react';
import { Loader } from '../Loader/Loader';
import { useAuthContext } from '../../Context';
import { toasterror, toastsuccess } from '../../Utilities';
import { Link } from 'react-router-dom';

function Notes({ videoId }) {

  const [notes, setnotes] = useState([])
  const [inputNote, setinputNote] = useState('')
  const [loading, setloading] = useState(false)

  const { user } = useAuthContext()

  let config = {
      headers: {
        authorization: user?.token,
      }
  }

  const handleSubmit = async () => {
    const noteObj = { note: inputNote, videoId}
    setloading(true)
    try{
      let res = await axios.post('/api/addNotes', { note: noteObj }, config)
      setnotes([...notes, res.data?.note])
      toastsuccess("Note Added")
    }catch(err){
      console.error(err)
      toasterror("An Error Occured")
    }finally{
      setloading(false)
    }

    setinputNote('')
  }

  const removeNote = async (_id) => {
    setloading(true)
    try{
      let res = await axios.delete('/api/removeNote/'+_id, config)
      setnotes(notes.filter((item) => item._id !== _id))
      toastsuccess("Note Removed")
    }catch(err){
      console.error(err)
      toasterror("An Error Occured")
    }finally{
      setloading(false)
    }
  }

  const getNotes = async () => {
    setloading(true)
    try{
        let res = await axios.get('/api/notes/'+videoId, config)
        setnotes(res.data?.notes)
    }catch(err){
        console.error(err)
        toasterror("An Error Occured")
    }finally{
      setloading(false)
    }
  }

  useEffect(() => {
    if(user){
      getNotes()  
    }
  }, [user])
  

  return !user ? (
    <div className="note--login">
      <p className='text--large'>Login to Add/View Notes</p>
      <Link to="/login"><button className='btn btn--secondary margin--medium'>Login</button></Link>
    </div>
  ) :(
    <div className="notes--section">
        <div className="notes__container">
            <div className="note__input--container margin-tb--large">          
                <input onChange={(e)=> setinputNote(e.target.value)} value={inputNote} className="note__input margin-right--medium" placeholder="Enter Note" />
                <button onClick={handleSubmit} className="btn btn--secondary">Submit</button>
            </div> 
            { loading && <Loader />}
            <div className="padding-top--small">
              {notes?.map((item)=>{
                return (<div key={item._id} className="container__flex--spacebetween margin-tb--large">
                  <p className="note--content">{item.note}</p>
                  <i onClick={()=>removeNote(item._id)} className="far fa-trash-alt del--icon margin-left--small"></i>
              </div>)
              })}
            </div>
        </div>
      </div>
  )
}

export { Notes }