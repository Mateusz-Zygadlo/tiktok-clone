import React, { useState, useEffect } from 'react';
import Auth from '../../layouts/Auth';

interface ComponentProps{
  setActualComponentFunc: (props: string) => void,
  userData: any,
}

const Result: React.FC<ComponentProps> = ({ setActualComponentFunc, userData }) => {
  const [previewImage, setPreviewImage] = useState<any>(null);
  const createFakeUrl = (userData: any) => {
    if(userData.picture){
      setPreviewImage(URL.createObjectURL(userData.picture));
    }
  }

  useEffect(() => {
    createFakeUrl(userData);
  }, [userData]);

  return(
    <Auth componentName="DescriptionProfile" setActualComponentFunc={setActualComponentFunc}>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-3xl font-semibold w-64 text-center mb-2">Final result</h1>
        <div className="flex justify-center flex-col items-center w-64">
          {previewImage ? 
            <img src={previewImage} alt="img" className="w-20 h-20 rounded-full" />
          :
            <div className="w-20 h-20 rounded-full bg-black"></div>
          }
          <h1 className="text-2xl font-extrabold">{userData.nick}</h1>
          <h2 className="text-md">[{userData.firstName} {userData.lastName}]</h2>
          <div className="w-64">
            <p className="text-lg font-semibold mt-2 break-words">{userData.description}</p>
          </div>
          <button type="submit" className="authButton">Create</button>
        </div>
        <a href='/login' className="w-60 hover:underline pb-2">If you have an account, click here</a>
      </div>
    </Auth>
  )
}

export default Result;