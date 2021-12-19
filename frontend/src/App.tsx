import Register from './components/auth/register/Register';
import Login from './components/auth/Login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Logout from './pages/Logout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Video from './pages/Video';
import UploadVideo from './pages/UploadVideo';
import useDecodeUser from './hooks/useDecodeUser';

const PrivateRoute = ({ children }: any) => {
  const user = useDecodeUser();
  
  return user ? children : <Navigate to="/" />
}
const GuestRoute = ({ children }: any) => {
  const user = useDecodeUser();

  return user ? <Navigate to="/login" /> : children
}

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route 
          path='/' 
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } />
        <Route 
          path="/register" 
          element={
            <GuestRoute>
              <Register />
            </GuestRoute>
          } />
        <Route 
          path="/login" 
          element={
            <GuestRoute>
              <Login />
            </GuestRoute>
          } />
        <Route 
          path='/logout' 
          element={
            <PrivateRoute>
              <Logout />
            </PrivateRoute>
          } />
        <Route 
          path="/profile" 
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          } />
        <Route 
          path='/settings' 
          element={
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          } />
        <Route 
          path='/video/:id' 
          element={
            <PrivateRoute>
              <Video />
            </PrivateRoute>
          } />
        <Route 
          path='/profile/:id' 
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          } />
        <Route 
          path="/upload" 
          element={
            <PrivateRoute>
              <UploadVideo />
            </PrivateRoute>
          } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;