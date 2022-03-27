import React from 'react';
import CategoryCard from '../../Components/CategoryCard/CategoryCard';
import './HomePage.css'

function HomePage() {

  const categories = [{id: 1, imgurl: '/Images/video.jpg', CategoryName: 'Editing'}, 
  {id: 2, imgurl: '/Images/video.jpg', CategoryName: 'Camera'}, {id: 3, imgurl: '/Images/video.jpg', CategoryName: 'Shooting'},
  {id: 4, imgurl: '/Images/video.jpg', CategoryName: 'Videography'}]

  return (
    <div>
      <div className='intro'>
        <div className='container--80 intro__container'>
            <div className="intro__content">
                <h1 className='intro__heading'>Learn Cinematography</h1>
                <h3 className='intro__description text--bold'>Learn how to make cinematic videos in 1 month</h3>
                <div className='intro--cta'>
                  <button className='btn btn--primary btn--large border--grey margin-tb--large'>Explore</button>
                </div>
            </div>
        </div>
      </div>
      <div class="container--80 category--container">
            <div class="container__flex--center margin-bottom--large padding--large">
                <h2 class="category__heading">Category</h2>
            </div>
            <div class="container__flex--center container__flex--wrap">
                {categories?.map((item)=>{
                    return <CategoryCard category={item} />
                })}
            </div>
      </div>
      <div class="container--80 inro-video--container padding-tb--medium">
            <div class="container__flex--center margin-bottom--large padding--large">
                <h2 class="category__heading">Introduction</h2>
            </div>         
            <div class="intro-video">
              <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>
            </div>

      </div>
    </div>
  )
}

export default HomePage