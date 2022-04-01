export const playlistReducerFn = (state, action) => {
    switch (action.type) {
      case 'setLikes':
          return { ...state, likes: action.payload}
      case 'addtoLikes':
          return { ...state, likes: [...state.likes, action.payload]}
      case 'removeFromLikes':
          return { ...state, likes: state.likes.filter((item) => item._id !== action.payload)}
      case 'setWatchLater':
          return { ...state, watchLater: action.payload}
      case 'addtoWatchLater':
            return { ...state, watchLater: [...state.watchLater, action.payload]}
      case 'removeFromWatchLater':
            return { ...state, watchLater: state.watchLater.filter((item) => item._id !== action.payload)}
      case 'setHistory':
          return { ...state, history: action.payload }
      case 'addtoHistory':
            return { ...state, history: [...state.history, action.payload]}
      case 'removeFromHistory':
            return { ...state, history: state.history.filter((item) => item._id !== action.payload)}
      case 'removeAllHistory':
            return { ...state, history: []}
      case 'setPlaylists':
          return { ...state, playlists: action.payload}
      case 'setAll':
          return { ...state, ...action.payload}
      case 'setloading':
          return { ...state, isLoading: action.payload}
      case 'clearAll':
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