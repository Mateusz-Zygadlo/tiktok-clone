import React, { useState, useEffect } from 'react';
import Auth from '../../layouts/Auth';
import axios from 'axios';

interface ComponentProps{
  setActualComponentFunc: (props: string) => void,
  userData: any,
  getInputLength: (e: any) => void,
  maxLength: any,
  repeatPasswordFunc: (e: any) => void,
  repeatPassword: any,
}

const BasicData: React.FC<ComponentProps> = ({ setActualComponentFunc, userData, maxLength, getInputLength, repeatPasswordFunc, repeatPassword }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordTwo, setShowPasswordTwo] = useState<boolean>(false);
  
  const [incorrectRepeatPassword, setIncorrectRepeatPassword] = useState<boolean>(false);
  const [existEmail, setExistEmail] = useState<boolean>(false);
  const [existNick, setExistNick] = useState<boolean>(false);
  
  const [nextStep, setNextStep] = useState<boolean>(false);

  const isUnique = (e: any) => {
    e.preventDefault();
    const { nick, email, password, passwordTwo } = userData;

    if(nick && email && password == passwordTwo){
      setIncorrectRepeatPassword(false);
      checkEmail();
      checkNick();
      setNextStep(true);
    }else{
      setIncorrectRepeatPassword(true);
    }
    console.log(true);
  }
  const checkEmail = async () => {
    await axios.post('http://localhost:8000/uniqueEmail', {email: userData.email})
        .then((res) => {
          setExistEmail(false);
      }).catch((err) => {
        setExistEmail(true);
      })
  }
  const checkNick = async () => {
    await axios.post('http://localhost:8000/uniqueNick', {nick: userData.nick})
      .then((res) => setExistNick(false))
      .catch((err) => setExistNick(true));
  }

  useEffect(() => {
    setNextStep(false);
  }, [userData.email, userData.nick, userData.password, userData.passwordTwo]);

  return(
    <Auth componentName="close" setActualComponentFunc={setActualComponentFunc}>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-3xl font-semibold w-64 text-center mb-2">Register</h1>
        <form onSubmit={isUnique}>
          <div className="flexDivRegister">
            <p className="pRegister">nick</p>
            <p className="pRegister">[{maxLength.nick}/20]</p>
          </div>
          <input type="text" name="nick" value={userData.nick} onChange={getInputLength} placeholder="Enter your Nick" className={`authInput textIndent ${existNick ? 'border-red-300': null}`} required />
          {existNick && <p className="text-red-300 font-semibold">nick already exists</p>}
          <div className="flexDivRegister">
            <p className="pRegister">email</p>
            <p className="pRegister">[{maxLength.email}/40]</p>
          </div>
          <input type="email" name="email" value={userData.email} onChange={getInputLength} placeholder="Enter your Email" className={`authInput textIndent ${existEmail ? 'border-red-300': null}`} required />
          {existEmail && <p className="text-red-300 font-semibold">email already exists</p>}
          <div className="flexDivRegister"> 
            <p className="pRegister">password</p>
            <p className="pRegister">[{maxLength.password}/40]</p>
          </div>
          <div className="flex items-center">
            <input type={showPassword ? "text" : "password"} name="password" value={userData.password} onChange={getInputLength} placeholder="Enter your Password" className='authInput textIndent' required />
            <span className="material-icons mt-2 -ml-10 cursor-pointer z-20" onClick={()=>{setShowPassword(!showPassword)}}>{showPassword ? "visibility" : "visibility_off"}</span>
          </div>
          <div className="flexDivRegister">
            <p className="pRegister">repeat password</p>
            <p className="pRegister">[{maxLength.passwordTwo}/40]</p>
          </div>
          <div className="flex items-center">
            <input type={showPasswordTwo ? "text" : "password"} name="passwordTwo" value={repeatPassword.passwordTwo} onChange={repeatPasswordFunc} placeholder="Repeat Password" className={`authInput textIndent ${incorrectRepeatPassword ? 'border-red-300' : null}`} required />
            <span className="material-icons mt-2 -ml-10 cursor-pointer z-20" onClick={()=>{setShowPasswordTwo(!showPasswordTwo)}}>{showPasswordTwo ? "visibility" : "visibility_off"}</span>
          </div>
          {incorrectRepeatPassword && <p className="text-red-300 font-semibold">incorrectly repeated password</p>}
          {!existEmail && !existNick && nextStep ? (
            <button type="submit" className="authButton" onClick={()=>{setActualComponentFunc('PersonalData')}}>Next</button>
          ):
            <button type="submit" className="authButton bg-black text-white hover:bg-black">Check</button>
          }
        </form>
        <a href='/login' className="w-60 hover:underline pb-2">If you have an account, click here</a>
      </div>
    </Auth>
  )
}

export default BasicData;