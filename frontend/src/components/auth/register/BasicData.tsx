import React, { useState } from 'react';
import Auth from '../../layouts/Auth';

interface ComponentProps{
  setActualComponentFunc: (props: string) => void,
  changeUserData: (props: any) => void,
  userData: any
}

const BasicData: React.FC<ComponentProps> = ({ setActualComponentFunc, changeUserData, userData }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordTwo, setShowPasswordTwo] = useState<boolean>(false);
  const [repeatPassword, setRepeatPassword] = useState<any>({
    passwordTwo: '',
  });

  const repeatPasswordFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setRepeatPassword({...repeatPassword, [name]: value});
  }

  return(
    <Auth componentName="close" setActualComponentFunc={setActualComponentFunc}>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-3xl font-semibold w-64 text-center mb-2">Register</h1>
        <form>
          <p className="text-sm font-semibold">nick</p>
          <input type="text" name="nick" value={userData.nick} onChange={changeUserData} placeholder="Enter your Nick" className="authInput textIndent" required />
          <p className="text-sm font-semibold">email</p>
          <input type="email" name="email" value={userData.email} onChange={changeUserData} placeholder="Enter your Email" className="authInput textIndent" required />
          <p className="text-sm font-semibold">password</p>
          <div className="flex items-center">
            <input type={showPassword ? "text" : "password"} name="password" value={userData.password} onChange={changeUserData} placeholder="Enter your Password" className="authInput textIndent" required />
            <span className="material-icons mt-2 -ml-10 cursor-pointer" onClick={()=>{setShowPassword(!showPassword)}}>{showPassword ? "visibility" : "visibility_off"}</span>
          </div>
          <p className="text-sm font-semibold">repeat password</p>
          <div className="flex items-center">
            <input type={showPasswordTwo ? "text" : "password"} name="passwordTwo" value={repeatPassword.passwordTwo} onChange={repeatPasswordFunc} placeholder="Repeat Password" className="authInput textIndent" required />
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