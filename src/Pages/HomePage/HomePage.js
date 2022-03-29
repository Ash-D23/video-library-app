import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
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
    }catch(err){
      console.log(err)
    }finally{
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
                  <Link to="/explore">
                    <button className='btn btn--primary btn--large border--grey margin-tb--large'>Explore</button>
                  </Link>
                </div>
            </div>
        </div>
      </div>
      <div className="container--80 category--container">
            <div className="container__flex--center margin-bottom--large padding--large">
                <h2 className="category__heading">Category</h2>
            </div>
            <div className="container__flex--center container__flex--wrap">
              { isloading ? <Loader /> : categories?.map((item)=>{
                    return <CategoryCard key={item._id} category={item} />
                })}
            </div>
      </div>
      <div className="container--80 inro-video--container padding-tb--medium">
            <div className="container__flex--center margin-bottom--large padding--large">
                <h2 className="category__heading">Introduction</h2>
            </div>         
            <div className="intro-video">
              <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>
            </div>

      </div>
    </div>
  )
}

export default HomePage