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
    year: 0,
    month: 0,
    day: 0,
    picture: '',
    description: '',
  });
  const history = useNavigate();
  const setActualComponentFunc = (props: string) => {
    if(props == 'close'){
      return history('/');
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

  return(
    <>
      {actualComponent == 'BasicData' ? 
        <BasicData 
          setActualComponentFunc={setActualComponentFunc}
          changeUserData={changeUserData}
          userData={userData} />
      : actualComponent == 'DescriptionProfile' ? 
        <DescriptionProfile 
          setActualComponentFunc={setActualComponentFunc}
          changeUserData={changeUserData}
          userData={userData} />
      : actualComponent == 'PersonalData' ? 
        <PersonalData 
          setActualComponentFunc={setActualComponentFunc}
          changeUserData={changeUserData}
          userData={userData} />
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
    </>
  )
}

export default Register;