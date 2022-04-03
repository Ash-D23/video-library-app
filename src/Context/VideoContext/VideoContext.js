import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { videoreducerfn } from "../../Reducers";
import { VIDEO_ACTIONS } from "../../Utilities";

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
        videoDispatch({ type:  VIDEO_ACTIONS.VIDEO_LOADING , payload: true})
        try{
            let videoresult = await axios.get('/api/videos')
            let categoryresult = await axios.get('/api/categories')        

            videoDispatch({ type: VIDEO_ACTIONS.SET_CATEGORIES_AND_VIDEOS, 
            payload: { videos: videoresult.data.videos, 
                categories:  categoryresult.data.categories.map((item)=> item.categoryName)}})
            
        }catch(err){
            console.log(err)
            videoDispatch({ type: VIDEO_ACTIONS.VIDEO_LOADING , payload: false})
        }
    }

    useEffect(() => {
        getVideos()
    }, []);

    const filtervideobyCategory = () => {
        if(videoState.selectedCategory === "All"){
            return videoState.videos
        }
        return videoState.videos?.filter((item)=> item.category === videoState.selectedCategory)
    }

    const selectCategory = (category) => videoDispatch({ type: VIDEO_ACTIONS.SELECTED_CATEGORY, payload: category})
    

    const filteredvideo = filtervideobyCategory()

   return <VideoContext.Provider value={ { videoState, selectCategory, filteredvideo, videoDispatch } }>
       {children}
   </VideoContext.Provider>
}

export { useVideo, VideoProvider }