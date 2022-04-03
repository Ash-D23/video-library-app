import React from 'react'
import { useSearchParams } from 'react-router-dom';
import { VideoList } from '../../Components';
import { useVideo } from '../../Context';
import './SearchPage.css'

function SearchPage() {

  const { videoState } = useVideo();

  const [searchParams] = useSearchParams()

  const filterVideoBySearch = (videos, search) => {
      if(search === null){
          return videos
      }

      return videos.filter((item) => item.title.toLowerCase().includes(search.toLowerCase() ))
  }

  const SearchVideos = filterVideoBySearch(videoState.videos, searchParams.get('search'))

  return (
    <div className='search--container'>
        <h2 className='text--center clr--secondary margin-tb--large'>Search Results</h2>
        <VideoList videos={SearchVideos} />
    </div>
  )
}

export { SearchPage }