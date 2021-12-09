import Register from './components/auth/register/Register';
import Login from './components/auth/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewFile from './pages/NewFile';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/new" element={<NewFile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;