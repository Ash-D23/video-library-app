import { Routes, Route, Navigate} from 'react-router-dom';
import { useAuthContext } from './Context';
import { Navigation, Footer } from './Components';
import RequireAuth from './hooks/RequireAuth';
import { HomePage, SingleVideoPage, UserProfile, VideoListingPage, NotFoundPage,
  Login, SignUp, Logout, Dashboard, LikePage, WatchLaterPage, HistoryPage, SinglePlaylistPage, PlaylistPage, SearchPage } from './Pages'
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Mockman from 'mockman-js';

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

        <Route path="/search" element={<SearchPage />} />

        { user ? <Route path='/login' element={<Navigate to="/" />} /> : <Route path='/login' element={<Login />} /> }
    
        { user ? <Route path='/signup' element={<Navigate to="/" />} /> : <Route path='/signup' element={<SignUp />} /> }

        <Route path='/logout' element={<Logout />} />

        <Route path="/testApi" element={<Mockman />} />

        <Route path="*" element={<NotFoundPage />} />

      </Routes>

      <Footer />

      <ToastContainer />
    </>
  );
}

export default App;
