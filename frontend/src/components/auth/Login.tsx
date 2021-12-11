import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../layouts/Auth';

axios.defaults.withCredentials = true;
interface UserData{
  email: string,
  password: string
}

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData>({
    email: '',
    password: '',
  })
  const history = useNavigate();

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setUserData({...userData, [name]: value});
  }
  const submitUserData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {email, password} = userData;
    if(email && password){
      axios.post('http://localhost:8000/auth/login', {email, password})
        .then((res) => history('/', {replace: true}))
        .catch((err) => console.log('error not login'));
    }

    return setUserData({email: '', password: ''})
  }

  const setActualComponentFunc = () => {
    return history('/', {replace: true});
  }

  return(
    <div className="absolute top-5 w-full h-full overflow-x-hidden">
      <Auth componentName="close" setActualComponentFunc={setActualComponentFunc}>
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-3xl font-semibold w-64 text-center mb-2">Login to TikTok clone</h1>
          <form onSubmit={submitUserData}>
            <p className="text-sm font-semibold">email</p>
            <input type="email" name="email" value={userData.email} onChange={changeInputValue} placeholder="Enter your Email" className="authInput textIndent" required />
            <p className="text-sm font-semibold">password</p>
            <div className="flex items-center">
              <input type={showPassword ? "text" : "password"} name="password" value={userData.password} onChange={changeInputValue} placeholder="Enter your Password" className="authInput textIndent" required />
              <span className="material-icons mt-2 -ml-10 cursor-pointer" onClick={toggleShowPassword}>{showPassword ? "visibility" : "visibility_off"}</span>
            </div>
            <button type="submit" className="authButton">Login</button>
          </form>
          <a href='/register' className="w-60 hover:underline pb-2">If you do not have an account, click here</a>
        </div>
      </Auth>
    </div>
  )
}

export default Login;