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

    // add to likes

    const addtoLikes = (video) => playlsitDispatch({ type: 'addtoLikes', payload: video})
    
    // remove video from likes

    const removeFromLikes = (_id) => playlsitDispatch({ type: 'removeFromLikes', payload: _id})

    // check if video in likes

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
    

    // add to watch later

    // remove from watch later

    // add to history

    // remove from history

    // remove all history

    // create playlist

    // playlistnames

    // add video to playlist

    // remove playlist

    // remove video from playlist

    console.log(playlistState)
    
    return <PlaylistContext.Provider value={ { addtoLikes, removeFromLikes, isVideoInLikes } }>
        {children}
    </PlaylistContext.Provider>
}

export { usePlaylist, PlaylistProvider}