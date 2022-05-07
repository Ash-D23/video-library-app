import React, {useState, useEffect, useRef} from 'react'
import { VideoCard } from '../VideoCard/VideoCard';
import { Loader } from '../Loader/Loader'
import './VideoList.css'
import { AddtoPlaylistModal } from '../AddtoPlaylistModal/AddtoPlaylistModal';

function VideoList({ videos, showRemove, removeHandler }) {

  const [showModal, setshowModal] = useState(false)
  const [Playlistvideo, setPlaylistvideo] = useState(null)
  const [endIndex, setendIndex] = useState(8)
  const [isLoading, setisLoading] = useState(false)

  const showPlaylist = (video) => {
    setPlaylistvideo(video)
    setshowModal(true)
  }

  const LoadMore = () => {
    setisLoading(true)
    setTimeout(() => {
      setendIndex(prev => prev > videos.length ? prev : prev + 8) 
      setisLoading(false)
    }, 1000)  
  }

  const loader = useRef(null);

  useEffect(() => {
    const elementRef = loader.current;
    const handleObserver = (entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        LoadMore()
      }
    };
    const observer = new IntersectionObserver(handleObserver);
    if (elementRef){
      observer.observe(elementRef);
    }
    return () => {
      observer.unobserve(elementRef);
    };
  }, []);

  return (
    <div className="container__flex--center container__flex--wrap video__list--container">
      {videos?.slice(0,endIndex).map((video)=>{
        return <VideoCard key={video._id} video={video} showRemove={showRemove} removeHandler={removeHandler} showPlaylist={showPlaylist} />
      })}
      <div className='video--full'>
        {isLoading && <Loader />}
      </div>

      {videos.length === 0 ? (
        <div className='empty-list--container'>
          <img src="/Images/blank.svg" alt="not found" />
          <h2 className='text--center padding--medium'>No Items Found</h2>
        </div>
      ) : null}
      <div ref={loader} />
      <AddtoPlaylistModal video={Playlistvideo} showModal={showModal} closeModal={() => setshowModal(false)} />
    </div>
  )
}

export { VideoList }