import BasicData from './components/auth/register/BasicData';
import Login from './components/auth/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return(
    <BrowserRouter>
      <Home />
      <Routes>
        <Route path="/register" element={<BasicData />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;