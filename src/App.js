import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import HomePage from './Pages/HomePage/HomePage';
import { Routes, Route, Navigate} from 'react-router-dom';
import SingleVideoPage from './Pages/SingleVideoPage/SingleVideoPage';
import UserProfile from './Pages/UserProfile/UserProfile';
import VideoListingPage from './Pages/VideoListingPage/VideoListingPage';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Logout from './Pages/Logout/Logout';
import Dashboard from './Pages/Dashboard/Dashboard';
import PlaylistPage from  './Pages/PlaylistPage/PlaylistPage';
import { useAuthContext } from './Context/AuthContext/AuthContext';
import RequireAuth from './hooks/RequireAuth';
import { VideoProvider } from './Context/VideoContext/VideoContext';

function App() {

  const { user } = useAuthContext()
  
  return (
    <>
      <Navigation />

      <Routes>

        <Route path='/' element={<HomePage />} />

        <Route path='/explore' element={<VideoListingPage />} >
          <Route path='' element={<Dashboard />} />
          <Route path='playlist' element={<RequireAuth><PlaylistPage /></RequireAuth>} />
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
