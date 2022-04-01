import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { initialPlaylist, playlistReducerFn } from "../../Reducers/PlaylistReducer/playlistReducerFn";
import { useAuthContext } from "../AuthContext/AuthContext";


const PlaylistContext = createContext();

const usePlaylist = () => useContext(PlaylistContext)

const PlaylistProvider = ({ children }) => {

    const [playlistState, playlsitDispatch] = useReducer(playlistReducerFn, initialPlaylist)

    const { user } = useAuthContext()

    let config = {
        headers: {
          authorization: user?.token,
        }
    }

    const getAllPlaylists = async () => {

        const urls = [ "/api/user/likes", "/api/user/watchLater", "/api/user/history", "/api/user/playlists" ]

        const promises = urls.map(apiURL => axios.get(apiURL, config))

        try{
            let result = await Promise.all(promises)
            playlsitDispatch({ 
                type: 'setAll', 
                payload: result.reduce((acc, curr)=> ({ ...acc, ...curr.data}), { isLoading: false})
            })
        }catch(err){
            console.log(err)
        }
    }

    const clearAllPlaylists = () => playlsitDispatch({ type: 'clearAll'})

    useEffect(()=>{
        if(user){
            getAllPlaylists()
        }else{
            clearAllPlaylists()
        }
    }, [user])

    const addtoLikes = async (video) => {
        try{
             await axios.post('/api/user/likes', { video }, config)
            playlsitDispatch({ type: 'addtoLikes', payload: video})

        }catch(err){
            console.log(err)
        }
    }

    const removeFromLikes = async (_id) => {
        try{
             await axios.delete('/api/user/likes/'+_id, config)
            playlsitDispatch({ type: 'removeFromLikes', payload: _id})
        }catch(err){
            console.log(err)
        }
    }

    const isVideoInLikes = (_id) => {
        let result = false
    
        playlistState.likes.forEach((item) => {
            if(item._id === _id){
                result = true
                return
            }
        })
    
        return result
    }

    const addtoWatchLater = async (video) => {
        try{
             await axios.post('/api/user/watchLater', { video }, config)
            playlsitDispatch({ type: 'addtoWatchLater', payload: video})
        }catch(err){
            console.log(err)
        }
    }

    const removeFromWatchLater = async (_id) => {
        try{
             await axios.delete('/api/user/watchLater/'+_id, config)
            playlsitDispatch({ type: 'removeFromWatchLater', payload: _id})
        }catch(err){
            console.log(err)
        }
    }

    const isVideoInWatchLater = (_id) => {
        let result = false
    
        playlistState.watchLater.forEach((item) => {
            if(item._id === _id){
                result = true
                return
            }
        })
    
        return result
    }

    const addtoHistory = async (video) => {
        try{
             await axios.post('/api/user/history', { video }, config)
            playlsitDispatch({ type: 'addtoHistory', payload: video})
        }catch(err){
            console.log(err)
        }
    }

    const removeFromHistory = async (_id) => {
        try{
             await axios.delete('/api/user/history/'+_id, config)
            playlsitDispatch({ type: 'removeFromHistory', payload: _id})
        }catch(err){
            console.log(err)
        }
    }

    const removeAllHistory = async () => {
        try{
             await axios.delete('/api/user/history/all', config)
            playlsitDispatch({ type: 'removeAllHistory'})
        }catch(err){
            console.log(err)
        }
    }

    const createNewPlaylist = async (playlist) => {
        try{
            let result = await axios.post('/api/user/playlists', { playlist }, config)
            playlsitDispatch({ type: 'setPlaylists', payload: result.data.playlists})
        }catch(err){
           console.log(err)
        }
    }

    console.log(playlistState)
    
    return <PlaylistContext.Provider value={ { 
        playlistState, addtoHistory, removeFromHistory, removeAllHistory,
        addtoLikes, removeFromLikes, isVideoInLikes, 
        addtoWatchLater, removeFromWatchLater, isVideoInWatchLater,
        createNewPlaylist } }>
        {children}
    </PlaylistContext.Provider>
}

export { usePlaylist, PlaylistProvider}