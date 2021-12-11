import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BasicData from './BasicData';
import DescriptionProfile from './DescriptionProfile';
import PersonalData from './PersonalData';
import ProfileImage from './ProfileImage';
import Result from './Result';

interface UserData{
  nick: string,
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  month: number,
  day: number,
  year: number,
  picture: any,
  description: string,
}

const Register = () => {
  const [actualComponent, setActualComponent] = useState<string>('BasicData');
  const [userData, setUserData] = useState<UserData>({
    nick: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    year: 2000,
    month: 9,
    day: 13,
    picture: '',
    description: '',
  });
  const [maxLength, setMaxLength] = useState<any>({
    nick: 0,
    email: 0,
    password: 0,
    passwordTwo: 0,
    firstName: 0,
    lastName: 0,
    description: 0,
  });
  const [repeatPassword, setRepeatPassword] = useState<any>({
    passwordTwo: '',
  });
  const history = useNavigate();
  const setActualComponentFunc = (props: string) => {
    if(props == 'close'){
      return history('/', {replace: true});
    }
    setActualComponent(props);
  }

  const changeUserData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setUserData({...userData, [name]: value});
  }
  const changeUserProfile = (props: any) => {
    setUserData({...userData, "picture": props});
  }

  const getInputLength = (e: any) => {
    const { name, value } = e.target;
    switch(name){
      case 'nick': 
        if(value.length < 21){
          changeUserData(e); 
          setMaxLength({...maxLength, [name]: value.length});
        }
        break;
      case 'firstName':
      case 'lastName':
        if(value.length < 31){
          changeUserData(e); 
          setMaxLength({...maxLength, [name]: value.length});
        }
        break;
      case 'email':
      case 'password':
        if(value.length < 41){
          changeUserData(e); 
          setMaxLength({...maxLength, [name]: value.length});
        }
        break;
      case 'description':
        if(value.length < 101){
          changeUserData(e); 
          setMaxLength({...maxLength, [name]: value.length});
        }
        break;
    }
  }

  const repeatPasswordFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    if(value.length < 41){
      changeUserData(e); 
      setMaxLength({...maxLength, [name]: value.length});
      setRepeatPassword({...repeatPassword, [name]: value});
    }
  }

  const formData = new FormData();
  formData.append('photo', userData.picture);

  return(
    <div className="absolute top-5 w-full h-full">
      {actualComponent == 'BasicData' ? 
        <BasicData 
          setActualComponentFunc={setActualComponentFunc}
          userData={userData}
          maxLength={maxLength}
          getInputLength={getInputLength}
          repeatPasswordFunc={repeatPasswordFunc}
          repeatPassword={repeatPassword} />
      : actualComponent == 'DescriptionProfile' ? 
        <DescriptionProfile 
          setActualComponentFunc={setActualComponentFunc}
          changeUserData={changeUserData}
          userData={userData}
          getInputLength={getInputLength}
          maxLength={maxLength} />
      : actualComponent == 'PersonalData' ? 
        <PersonalData 
          setActualComponentFunc={setActualComponentFunc}
          changeUserData={changeUserData}
          userData={userData}
          getInputLength={getInputLength}
          maxLength={maxLength} />
      : actualComponent == 'ProfileImage' ?
        <ProfileImage 
          setActualComponentFunc={setActualComponentFunc}
          changeUserProfile={changeUserProfile}
          userData={userData} />
      : actualComponent == 'Result' ? 
        <Result 
          setActualComponentFunc={setActualComponentFunc}
          userData={userData} />
      : null}
    </div>
  )
}

export default Register;