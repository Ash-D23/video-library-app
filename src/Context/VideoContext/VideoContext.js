import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react"
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

    const filterproductsbyCategory = () => {

    }

    const selectcategory = (category) => {
        videodispatch({ type: 'selectedcategory', payload: category})
    }

   return <VideoContext.Provider value={ { videostate, selectcategory } }>
       {children}
   </VideoContext.Provider>
}

export { useVideo, VideoProvider }