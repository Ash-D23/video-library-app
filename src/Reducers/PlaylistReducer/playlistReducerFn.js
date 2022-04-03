import { PLAYLISTS_ACTIONS } from "../../Utilities";

export const playlistReducerFn = (state, action) => {
    switch (action.type) {
      case PLAYLISTS_ACTIONS.SET_LIKES:
          return { ...state, likes: action.payload}
      case PLAYLISTS_ACTIONS.ADD_TO_LIKES:
          return { ...state, likes: [...state.likes, action.payload]}
      case PLAYLISTS_ACTIONS.REMOVE_FROM_LIKES:
          return { ...state, likes: state.likes.filter((item) => item._id !== action.payload)}
      case PLAYLISTS_ACTIONS.SET_WATCH_LATER:
          return { ...state, watchLater: action.payload}
      case PLAYLISTS_ACTIONS.ADD_TO_WATCH_LATER:
            return { ...state, watchLater: [...state.watchLater, action.payload]}
      case PLAYLISTS_ACTIONS.REMOVE_FROM_WATCH_LATER:
            return { ...state, watchLater: state.watchLater.filter((item) => item._id !== action.payload)}
      case PLAYLISTS_ACTIONS.SET_HISTORY:
          return { ...state, history: action.payload }
      case PLAYLISTS_ACTIONS.ADD_TO_HISTORY:
            return { ...state, history: [...state.history, action.payload]}
      case PLAYLISTS_ACTIONS.REMOVE_FROM_HISTORY:
            return { ...state, history: state.history.filter((item) => item._id !== action.payload)}
      case PLAYLISTS_ACTIONS.REMOVE_ALL_HISTORY:
            return { ...state, history: []}
      case PLAYLISTS_ACTIONS.SET_PLAYLISTS:
          return { ...state, playlists: action.payload}
      case PLAYLISTS_ACTIONS.REMOVE_FROM_PLAYLISTS:
            return { ...state, playlists: state.playlists.filter((item) => item._id !== action.payload)}
      case PLAYLISTS_ACTIONS.UPDATE_PLAYLISTS:
            return { ...state, playlists: state.playlists.map((item) => item._id === action.payload._id ? 
                action.payload.playlist : item )}
      case PLAYLISTS_ACTIONS.SET_ALL:
          return { ...state, ...action.payload}
      case PLAYLISTS_ACTIONS.SET_LOADING:
          return { ...state, isLoading: action.payload}
      case PLAYLISTS_ACTIONS.CLEAR_ALL:
          return { ...initialPlaylist }
      default:
        return state;
    }
};

export const initialPlaylist = {
    isLoading: false,
    likes: [],
    watchLater: [],
    history: [],
    playlists: []
}