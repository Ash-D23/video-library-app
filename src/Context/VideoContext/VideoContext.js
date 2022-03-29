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
        videodispatch({ type: 'videoLoading' , payload: true})
        try{
            let videoresult = await axios.get('/api/videos')
            let categoryresult = await axios.get('/api/categories')        

            videodispatch({ type: 'setcategoriesandvideos', 
            payload: { videos: videoresult.data.videos, 
                categories:  categoryresult.data.categories.map((item)=> item.categoryName)}})
            
        }catch(err){
            console.log(err)
            videodispatch({ type: 'videoLoading' , payload: false})
        }
    }

    useEffect(() => {
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

   return <VideoContext.Provider value={ { videostate, selectcategory, filteredvideo, videodispatch } }>
       {children}
   </VideoContext.Provider>
}

export { useVideo, VideoProvider }