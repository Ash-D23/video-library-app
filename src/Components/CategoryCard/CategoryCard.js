import React from 'react'
import { useNavigate } from 'react-router-dom'

function CategoryCard({ category : {id, imgurl, categoryName}}) {

    const navigate = useNavigate()

    return (
      <div onClick={()=> navigate("/explore?category="+categoryName)} className="category--card container--relative">
          <div className="category--image">
            <img src={imgurl} />
          </div>
          <h3 className="category--title">{categoryName}</h3>
          <div className="category--overlay shadow--bottom">
          </div>
      </div>
    )
  }

export { CategoryCard }