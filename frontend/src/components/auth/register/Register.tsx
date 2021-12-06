import { useState } from 'react';

import BasicData from './BasicData';
import DescriptionProfile from './DescriptionProfile';
import PersonalData from './PersonalData';
import ProfileImage from './ProfileImage';
import Result from './Result';

const Register = () => {
  const [actualComponent, setActualComponent] = useState<string>('BasicData');
  const setActualComponentFunc = (props: string) => {
    setActualComponent(props);
  }

  return(
    <>
      {actualComponent == 'BasicData' ? 
        <BasicData closeButton={true} setActualComponentFunc={setActualComponentFunc} />
      : actualComponent == 'DescriptionProfile' ? 
        <DescriptionProfile setActualComponentFunc={setActualComponentFunc} />
      : actualComponent == 'PersonalData' ? 
        <PersonalData setActualComponentFunc={setActualComponentFunc} />
      : actualComponent == 'ProfileImage' ?
        <ProfileImage setActualComponentFunc={setActualComponentFunc} />
      : actualComponent == 'Result' ? 
        <Result />
      : null}
    </>
  )
}

export default Register;