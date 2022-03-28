import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react"
import { videos } from "../../backend/db/videos";
import { videoreducerfn } from "../../Reducers/VideoReducer/videoReducerfn";

const VideoContext = createContext()

const useVideo = () => useContext(VideoContext)

const VideoProvider = ({ children }) => {

    const [videostate, videodispatch] = useReducer(videoreducerfn, {
        videos: [],
        isLoading: false,
        categories: ['All'],
        selectedcategory: 'All'
      });

    const getVideos = async () => {
    try{
        let videoresult = await axios.get('/api/videos')
        let categoryresult = await axios.get('/api/categories')
        videodispatch({ type: 'setvideos' , payload: videoresult.data.videos})
        videodispatch({ type: 'setcategories' , payload: categoryresult.data.categories.map((item)=> item.categoryName)})
        videodispatch({ type: 'videoLoading' , payload: false})
        
    }catch(err){
        console.log(err)
        videodispatch({ type: 'videoLoading' , payload: false})
    }
    }

    useEffect(() => {
    videodispatch({ type: 'videoLoading' , payload: true})
    getVideos()
    }, []);

    const filtervideobyCategory = () => {
        if(videostate.selectedcategory === "All"){
            return videos
        }
        return videos.filter((item)=> item.category === videostate.selectedcategory)
    }

    const selectcategory = (category) => {
        videodispatch({ type: 'selectedcategory', payload: category})
    }

    const filteredvideo = filtervideobyCategory()

   return <VideoContext.Provider value={ { videostate, selectcategory, filteredvideo } }>
       {children}
   </VideoContext.Provider>
}

export { useVideo, VideoProvider }