import Register from './components/auth/register/Register';
import Login from './components/auth/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Logout from './pages/Logout';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;