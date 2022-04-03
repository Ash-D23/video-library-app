import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { initialPlaylist, playlistReducerFn } from "../../Reducers";
import { toasterror, toastsuccess } from "../../Utilities";
import { useAuthContext } from "../AuthContext/AuthContext";
import { PLAYLISTS_ACTIONS } from "../../Utilities";

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
                type: PLAYLISTS_ACTIONS.SET_ALL, 
                payload: result.reduce((acc, curr)=> ({ ...acc, ...curr.data}), { isLoading: false})
            })
        }catch(err){
            console.log(err)
        }
    }

    const clearAllPlaylists = () => playlsitDispatch({ type: PLAYLISTS_ACTIONS.CLEAR_ALL})

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
            playlsitDispatch({ type: PLAYLISTS_ACTIONS.ADD_TO_LIKES, payload: video})
            toastsuccess("Added to Likes")
        }catch(err){
            console.log(err)
            toasterror("An Error Occured")
        }
    }

    const removeFromLikes = async (_id) => {
        try{
            await axios.delete('/api/user/likes/'+_id, config)
            playlsitDispatch({ type: PLAYLISTS_ACTIONS.REMOVE_FROM_LIKES, payload: _id})
            toastsuccess("Removed From Likes")
        }catch(err){
            console.log(err)
            toasterror("An Error Occured")
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
            playlsitDispatch({ type: PLAYLISTS_ACTIONS.ADD_TO_WATCH_LATER, payload: video})
            toastsuccess("Added to Watch Later")
        }catch(err){
            console.log(err)
            toasterror("An Error Occured")
        }
    }

    const removeFromWatchLater = async (_id) => {
        try{
             await axios.delete('/api/user/watchLater/'+_id, config)
            playlsitDispatch({ type: PLAYLISTS_ACTIONS.REMOVE_FROM_WATCH_LATER, payload: _id})
            toastsuccess("Removed from Likes")
        }catch(err){
            console.log(err)
            toasterror("An Error Occured")
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
            playlsitDispatch({ type: PLAYLISTS_ACTIONS.ADD_TO_HISTORY, payload: video})
        }catch(err){
            console.log(err)
            toasterror("An Error Occured")
        }
    }

    const removeFromHistory = async (_id) => {
        try{
            await axios.delete('/api/user/history/'+_id, config)
            playlsitDispatch({ type: PLAYLISTS_ACTIONS.REMOVE_FROM_HISTORY, payload: _id})
            toastsuccess("Removed From Likes")
        }catch(err){
            console.log(err)
            toasterror("An Error Occured")
        }
    }

    const removeAllHistory = async () => {
        try{
            await axios.delete('/api/user/history/all', config)
            playlsitDispatch({ type: PLAYLISTS_ACTIONS.REMOVE_ALL_HISTORY})
            toastsuccess("All History Cleared")
        }catch(err){
            console.log(err)
            toasterror("An Error Occured")
        }
    }

    const createNewPlaylist = async (playlist) => {
        try{
            let result = await axios.post('/api/user/playlists', { playlist }, config)
            playlsitDispatch({ type: PLAYLISTS_ACTIONS.SET_PLAYLISTS, payload: result.data.playlists})
            toastsuccess("New Playlist Created")
        }catch(err){
           console.log(err)
           toasterror("An Error Occured")
        }
    }

    const removeFromPlaylists = async (_id) => {
        try{
            let res = await axios.delete('/api/user/playlists/'+_id, config)
            playlsitDispatch({ type: PLAYLISTS_ACTIONS.REMOVE_FROM_PLAYLISTS, payload: _id})
            toastsuccess("Removed Playlist")
        }catch(err){
            console.log(err)
            toasterror("An Error Occured")
        }
    }

    const addVideoToPlaylist = async (video, playlistID) => {
        try{
            let result = await axios.post('/api/user/playlists/'+playlistID, { video }, config)
            playlsitDispatch({ type: PLAYLISTS_ACTIONS.UPDATE_PLAYLISTS, payload: { _id: playlistID, playlist: result.data?.playlist}})
            toastsuccess("Added Video to Playlist")
        }catch(err){
            if(err.response.status === 409){
                toasterror("VIdeo Already in Playlist")
            }else{
                console.log(err)
                toasterror("An Error Occured")
            }
            
        }
    }

    const removeVideoFromPlaylist = async (playlistID, videoID) => {
        try{
            let result = await axios.delete(`/api/user/playlists/${playlistID}/${videoID}`, config)
            playlsitDispatch({ type: PLAYLISTS_ACTIONS.UPDATE_PLAYLISTS, payload: { _id: playlistID, playlist: result.data?.playlist}})
            toastsuccess("Removed Video From Playlist")
        }catch(err){
            console.log(err)
            toasterror("An Error Occured")
        }
    }
    
    return <PlaylistContext.Provider value={ { 
        playlistState, addtoHistory, removeFromHistory, removeAllHistory,
        addtoLikes, removeFromLikes, isVideoInLikes, 
        addtoWatchLater, removeFromWatchLater, isVideoInWatchLater,
        createNewPlaylist, removeFromPlaylists, addVideoToPlaylist, removeVideoFromPlaylist } }>
        {children}
    </PlaylistContext.Provider>
}

export { usePlaylist, PlaylistProvider}