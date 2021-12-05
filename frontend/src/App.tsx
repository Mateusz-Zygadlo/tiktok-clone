import Register from './components/auth/Register';
import MoreRegister from './components/auth/MoreRegister';
import Login from './components/auth/Login';
import RegisterDetail from './components/auth/RegisterDetail';
import RegisterImg from './components/auth/RegisterImg';

const App = () => {
  return(
    <div className="my-20">
      <Login />
      <Register />
      <MoreRegister />
      <RegisterDetail />
      <RegisterImg />
    </div>
  )
}

export default App;