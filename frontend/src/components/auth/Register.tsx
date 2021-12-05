import React, { useState } from 'react';
import Auth from '../layouts/Auth';

interface UserData{
  nick: string,
  email: string,
  password: string,
  passwordTwo: string,
}

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordTwo, setShowPasswordTwo] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData>({
    nick: '',
    email: '',
    password: '',
    passwordTwo: ''
  })

  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setUserData({...userData, [name]: value});
  }

  const submitUserData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {password, passwordTwo} = userData;
    if(password !== passwordTwo){
      return setUserData({...userData, password: '', passwordTwo: ''})
    }

    return setUserData({nick: '', email: '', password: '', passwordTwo: ''})
  }

  return(
    <Auth>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-3xl font-semibold w-64 text-center mb-2">Register</h1>
        <form onSubmit={submitUserData}>
          <input type="text" name="nick" value={userData.nick} onChange={changeInputValue} placeholder="Enter your Nick" className="authInput textIndent" required />
          <input type="email" name="email" value={userData.email} onChange={changeInputValue} placeholder="Enter your Email" className="authInput textIndent" required />
          <div className="flex items-center">
            <input type={showPassword ? "text" : "password"} name="password" value={userData.password} onChange={changeInputValue} placeholder="Enter your Password" className="authInput textIndent" required />
            <span className="material-icons mt-2 -ml-10 cursor-pointer" onClick={()=>{setShowPassword(!showPassword)}}>{showPassword ? "visibility" : "visibility_off"}</span>
          </div>
          <div className="flex items-center">
            <input type={showPasswordTwo ? "text" : "password"} name="passwordTwo" value={userData.passwordTwo} onChange={changeInputValue} placeholder="Repeat Password" className="authInput textIndent" required />
            <span className="material-icons mt-2 -ml-10 cursor-pointer" onClick={()=>{setShowPasswordTwo(!showPasswordTwo)}}>{showPasswordTwo ? "visibility" : "visibility_off"}</span>
          </div>
          <button type="submit" className="authButton">Register</button>
        </form>
         <a href='/register' className="w-60 hover:underline pb-2">If you have an account, click here</a>
      </div>
    </Auth>
  )
}

export default Register;