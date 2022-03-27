import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import HomePage from './Pages/HomePage/HomePage'
import { Routes, Route} from 'react-router-dom';
import SingleVideoPage from './Pages/SingleVideoPage/SingleVideoPage';
import UserProfile from './Pages/UserProfile/UserProfile';
import VideoListingPage from './Pages/VideoListingPage/VideoListingPage';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Logout from './Pages/Logout/Logout';
import Dashboard from './Pages/Dashboard/Dashboard';
import CategoryPage from './Pages/CategoryPage/CategoryPage';
import PlaylistPage from  './Pages/PlaylistPage/PlaylistPage';

function App() {
  return (
    <>
      <Navigation />

      <Routes>

        <Route path='/' element={<HomePage />} />

        <Route path='/explore' element={<VideoListingPage />} >
          <Route path='' element={<Dashboard />} />
          <Route path='category' element={<CategoryPage />} />
          <Route path='playlist' element={<PlaylistPage />} />
        </Route>

        <Route path='/video/:id' element={<SingleVideoPage />} />

        <Route path='/profile' element={<UserProfile />} />

        <Route path='/login' element={<Login />} />

        <Route path='/signup' element={<SignUp />} />

        <Route path='/logout' element={<Logout />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
