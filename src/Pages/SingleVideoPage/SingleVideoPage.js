import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../Components/Loader/Loader';
import Notes from '../../Components/Notes/Notes';
import { usePlaylist } from '../../Context/PlaylistContext/PlaylistContext';
import './SingleVideoPage.css';

function SingleVideoPage() {

  const [singlevideo, setsinglevideo] = useState({})
  const [isLoading, setisLoading] = useState(true)

  const getSingleVideo = async () => {
    try{
      let result = await axios.get('/api/video/'+params.id)
      if(result.data?.video){
        setsinglevideo(result.data?.video)
      }
      setisLoading(false)
    }catch(err){
      console.log(err)
      setisLoading(false)
    }
  }

  useEffect(() => {
    getSingleVideo()
  }, [])

  const params = useParams()

  const { addtoLikes, removeFromLikes, isVideoInLikes,
    addtoWatchLater, removeFromWatchLater, isVideoInWatchLater } = usePlaylist()

  const checkVideoInLikes = isVideoInLikes(singlevideo?._id)

  const checkVideoInWatchLater = isVideoInWatchLater(singlevideo?._id)

  const toggleLike = () => checkVideoInLikes ? removeFromLikes(singlevideo?._id) : addtoLikes(singlevideo)

  const toggleWatchLater = () => checkVideoInWatchLater ? removeFromWatchLater(singlevideo?._id) : addtoWatchLater(singlevideo)

  return isLoading ? <Loader /> : (
    <div className='single-video__container'>
      <div className="single-video--content">
          <div className="single-video">
            
            <iframe src={singlevideo?.url}>
            </iframe>
            
            <div className="single-video--info">
                <h3>{singlevideo.title} | by {singlevideo?.creator}</h3>
                <div className="single-video--actions">
                  <div className="single-video--actions--container">
                    <div onClick={toggleLike} className={`single-video--action ${checkVideoInLikes ? 'video--active' : null}`}>
                      <i className="far fa-thumbs-up"></i>
                      <p className="margin-left--small">Like</p>
                    </div>
                    <div onClick={toggleWatchLater} className={`single-video--action ${checkVideoInWatchLater ? 'video--active' : null}`}>
                      <i className="far fa-clock"></i>
                      <p className="margin-left--small">Add to Watch Later</p>
                    </div>
                    <div className="single-video--action">
                      <i className="fas fa-list"></i>
                      <p className="margin-left--small">Add to Playlist</p>
                    </div>
                  </div>
                  <div>
                    Views | 4 hous ago
                  </div>
                </div>
            </div>

            <div className="single-video--description">
              <h3>Description</h3>
              <p className="padding-tb--small">{singlevideo?.description}</p>
            </div>
          </div>
      </div>
      <Notes />
    </div>
  )
}

export default SingleVideoPage