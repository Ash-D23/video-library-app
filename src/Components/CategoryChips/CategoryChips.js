import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useVideo } from '../../Context/VideoContext/VideoContext';
import './CategoryChips.css'

function CategoryChips() {

  const { videoState, selectCategory, videoDispatch } = useVideo()

  const [searchParams] = useSearchParams()

  let category = searchParams.get('category')

  useEffect(()=>{
      if(category){
        videoDispatch({ type: "selectedCategory", payload: category})
      }
  }, [category])

  return (
    <div className="chips__container">
        {videoState.categories?.map((item)=>{
            return <button key={item} onClick={()=> selectCategory(item)} 
            className={`chip chip--primary ${item === videoState.selectedCategory ? 'chip--active': null}`}> 
            {item}
            </button>
        })}
    </div>
  )
}

export default CategoryChips