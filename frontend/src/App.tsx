import Register from './components/auth/register/Register';
import Login from './components/auth/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Logout from './pages/Logout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Video from './pages/Video';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/video/:id' element={<Video />} />
        <Route path='/profile/:id' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;