import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useVideo } from '../../Context/VideoContext/VideoContext';
import './CategoryChips.css'

function CategoryChips() {

  const { videostate, selectcategory, videodispatch } = useVideo()

  console.log(videostate)

  const [searchParams] = useSearchParams()

  let category = searchParams.get('category')

  useEffect(()=>{
      if(category){
        videodispatch({ type: "selectedcategory", payload: category})
      }
  }, [category])

  return (
    <div class="chips__container">
        {videostate.categories?.map((item)=>{
            return <button onClick={()=> selectcategory(item)} 
            class={`chip chip--primary ${item === videostate.selectedcategory ? 'chip--active': null}`}> 
            {item}
            </button>
        })}
    </div>
  )
}

export default CategoryChips