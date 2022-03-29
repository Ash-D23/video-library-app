import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react"
import { videos } from "../../backend/db/videos";
import { videoreducerfn } from "../../Reducers/VideoReducer/videoReducerfn";

const VideoContext = createContext()

const useVideo = () => useContext(VideoContext)

const VideoProvider = ({ children }) => {

    const [videoState, videoDispatch] = useReducer(videoreducerfn, {
        videos: [],
        isLoading: false,
        categories: ['All'],
        selectedCategory: 'All'
      });

    const getVideos = async () => {
        videoDispatch({ type: 'videoLoading' , payload: true})
        try{
            let videoresult = await axios.get('/api/videos')
            let categoryresult = await axios.get('/api/categories')        

            videoDispatch({ type: 'setcategoriesandvideos', 
            payload: { videos: videoresult.data.videos, 
                categories:  categoryresult.data.categories.map((item)=> item.categoryName)}})
            
        }catch(err){
            console.log(err)
            videoDispatch({ type: 'videoLoading' , payload: false})
        }
    }

    useEffect(() => {
        getVideos()
    }, []);

    const filtervideobyCategory = () => {
        if(videoState.selectedCategory === "All"){
            return videos
        }
        return videos.filter((item)=> item.category === videoState.selectedCategory)
    }

    const selectCategory = (category) => {
        videoDispatch({ type: 'selectedCategory', payload: category})
    }

    const filteredvideo = filtervideobyCategory()

   return <VideoContext.Provider value={ { videoState, selectCategory, filteredvideo, videoDispatch } }>
       {children}
   </VideoContext.Provider>
}

export { useVideo, VideoProvider }