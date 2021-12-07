import React, { useState, useEffect } from 'react';
import Auth from '../../layouts/Auth';

interface ComponentProps{
  setActualComponentFunc: (props: string) => void,
  userData: any,
}

const Result: React.FC<ComponentProps> = ({ setActualComponentFunc, userData }) => {
  const [previewImage, setPreviewImage] = useState<any>(null);
  const createFakeUrl = (userData: any) => {
    setPreviewImage(URL.createObjectURL(userData.picture));
  }

  useEffect(() => {
    createFakeUrl(userData);
  }, [])

  return(
    <Auth componentName="DescriptionProfile" setActualComponentFunc={setActualComponentFunc}>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-3xl font-semibold w-64 text-center mb-2">Final result</h1>
        <div className="flex justify-center flex-col items-center">
          {previewImage ? 
            <img src={previewImage} alt="img" className="w-20 h-20 rounded-full" />
          :
            <div className="w-20 h-20 rounded-full bg-black"></div>
          }
          <h1 className="text-2xl font-extrabold">{userData.nick}</h1>
          <h2 className="text-md">[{userData.firstName} {userData.lastName}]</h2>
          <p className="text-lg font-semibold mt-2">{userData.description}</p>
          <div className="w-64">
            <button type="submit" className="authButton">Create</button>
          </div>
        </div>
        <a href='/register' className="w-60 hover:underline pb-2">If you have an account, click here</a>
      </div>
    </Auth>
  )
}

export default Result;