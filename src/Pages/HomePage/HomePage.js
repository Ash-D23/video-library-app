import axios from 'axios';
import React, {useEffect, useState} from 'react';
import CategoryCard from '../../Components/CategoryCard/CategoryCard';
import Loader from '../../Components/Loader/Loader'
import './HomePage.css'

function HomePage() {

  const [categories, setcategories] = useState([])
  const [isloading, setisloading] = useState(false)

  const getCategories= async () => {
    try{
      let categoryresult = await axios.get('/api/categories')
      setcategories(categoryresult.data.categories)
      setisloading(false)
    }catch(err){
      console.log(err)
      setisloading(false)
    }
  }

  useEffect(() => {
    setisloading(true)
    getCategories()
  }, [])

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
              { isloading ? <Loader /> : categories?.map((item)=>{
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