import React, { useState } from 'react';
import Auth from '../layouts/Auth';

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

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setUserData({...userData, [name]: value});
  }
  const submitUserData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    return setUserData({email: '', password: ''})
  }

  return(
    <Auth>
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
  )
}

export default Login;