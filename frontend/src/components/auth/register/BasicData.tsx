import React, { useState } from 'react';
import Auth from '../../layouts/Auth';

interface UserData{
  nick: string,
  email: string,
  password: string,
  passwordTwo: string,
}

interface ComponentProps{
  closeButton: boolean,
  setActualComponentFunc: (props: string) => void,
}

const BasicData: React.FC<ComponentProps> = ({ closeButton, setActualComponentFunc }) => {
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
    <Auth closeButton={closeButton}>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-3xl font-semibold w-64 text-center mb-2">Register</h1>
        <form onSubmit={submitUserData}>
          <p className="text-sm font-semibold">nick</p>
          <input type="text" name="nick" value={userData.nick} onChange={changeInputValue} placeholder="Enter your Nick" className="authInput textIndent" required />
          <p className="text-sm font-semibold">email</p>
          <input type="email" name="email" value={userData.email} onChange={changeInputValue} placeholder="Enter your Email" className="authInput textIndent" required />
          <p className="text-sm font-semibold">password</p>
          <div className="flex items-center">
            <input type={showPassword ? "text" : "password"} name="password" value={userData.password} onChange={changeInputValue} placeholder="Enter your Password" className="authInput textIndent" required />
            <span className="material-icons mt-2 -ml-10 cursor-pointer" onClick={()=>{setShowPassword(!showPassword)}}>{showPassword ? "visibility" : "visibility_off"}</span>
          </div>
          <p className="text-sm font-semibold">repeat password</p>
          <div className="flex items-center">
            <input type={showPasswordTwo ? "text" : "password"} name="passwordTwo" value={userData.passwordTwo} onChange={changeInputValue} placeholder="Repeat Password" className="authInput textIndent" required />
            <span className="material-icons mt-2 -ml-10 cursor-pointer" onClick={()=>{setShowPasswordTwo(!showPasswordTwo)}}>{showPasswordTwo ? "visibility" : "visibility_off"}</span>
          </div>
          <button type="submit" className="authButton" onClick={()=>{setActualComponentFunc('PersonalData')}}>Next</button>
        </form>
         <a href='/register' className="w-60 hover:underline pb-2">If you have an account, click here</a>
      </div>
    </Auth>
  )
}

export default BasicData;