import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useVideo } from '../../Context/VideoContext/VideoContext';
import './CategoryChips.css'

function CategoryChips() {

  const { videostate, selectcategory, videodispatch } = useVideo()

  const [searchParams] = useSearchParams()

  let category = searchParams.get('category')

  useEffect(()=>{
      if(category){
        videodispatch({ type: "selectedcategory", payload: category})
      }
  }, [category])

  return (
    <div className="chips__container">
        {videostate.categories?.map((item)=>{
            return <button key={item} onClick={()=> selectcategory(item)} 
            className={`chip chip--primary ${item === videostate.selectedcategory ? 'chip--active': null}`}> 
            {item}
            </button>
        })}
    </div>
  )
}

export default CategoryChips