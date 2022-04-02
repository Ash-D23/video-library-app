import { Routes, Route, Navigate} from 'react-router-dom';
import { useAuthContext } from './Context/AuthContext/AuthContext';
import { Navigation, Footer } from './Components'
import RequireAuth from './hooks/RequireAuth';
import { HomePage, SingleVideoPage, UserProfile, VideoListingPage,
  Login, SignUp, Logout, Dashboard, LikePage, WatchLaterPage, HistoryPage, SinglePlaylistPage, PlaylistPage } from './Pages'
import './App.css';

function App() {

  const { user } = useAuthContext()
  
  return (
    <>
      <Navigation />

      <Routes>

        <Route path='/' element={<HomePage />} />

        <Route path='/explore' element={<VideoListingPage />} >
          <Route path='' element={<Dashboard />} />
          <Route path='likes' element={<RequireAuth><LikePage /></RequireAuth>} />
          <Route path='watchlater' element={<RequireAuth><WatchLaterPage /></RequireAuth>} />
          <Route path='history' element={<RequireAuth><HistoryPage /></RequireAuth>} />
          <Route path='playlist' element={<RequireAuth><PlaylistPage /></RequireAuth>} />
          <Route path='playlist/:id' element={<RequireAuth><SinglePlaylistPage /></RequireAuth>} />
        </Route>

        <Route path='/video/:id' element={<SingleVideoPage />} />

        <Route path='/profile' element={<RequireAuth><UserProfile /></RequireAuth>} />

        { user ? <Route path='/login' element={<Navigate to="/" />} /> : <Route path='/login' element={<Login />} /> }
    
        { user ? <Route path='/signup' element={<Navigate to="/" />} /> : <Route path='/signup' element={<SignUp />} /> }

        <Route path='/logout' element={<Logout />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
