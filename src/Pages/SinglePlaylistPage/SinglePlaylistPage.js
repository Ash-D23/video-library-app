import React, { useState, useEffect } from 'react';
import VideoList from '../../Components/VideoList/VideoList';
import VideoHead from '../../Components/VideoHead/VideoHead';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loader from '../../Components/Loader/Loader';
import { useAuthContext } from '../../Context/AuthContext/AuthContext';

function SinglePlaylistPage() {

  const [playlistInfo, setplaylistInfo] = useState({})
  const [isLoading, setisLoading] = useState(true)
  const { user } = useAuthContext()

  const getSinglePlaylist = async () => {
    try{
      let result = await axios.get('/api/user/playlists/'+params.id, {
          headers: {
            authorization: user?.token,
          }
      })
      console.log(result)
      if(result.data?.playlist){
        setplaylistInfo(result.data?.playlist)
      }
      setisLoading(false)
    }catch(err){
      console.log(err)
      setisLoading(false)
    }
  }

  useEffect(() => {
    getSinglePlaylist()
  }, [])

  console.log(playlistInfo)

  const params = useParams()

  return isLoading ? <Loader /> : (
    <div className="main">
      <VideoHead heading={playlistInfo?.title} description={playlistInfo?.description} />
      <VideoList videos={playlistInfo?.videos} showRemove={true} removeHandler={null} />
    </div>
  )
}

export default SinglePlaylistPage