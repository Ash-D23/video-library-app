import React from 'react'

function CategoryCard({ category : {id, imgurl, CategoryName}}) {

    return (
      <div onClick={null} class="category--card container--relative">
          <div className="category--image">
            <img src={imgurl} />
          </div>
          <h3 class="category--title">{CategoryName}</h3>
          <div class="category--overlay shadow--bottom">
          </div>
      </div>
    )
  }

export default CategoryCard