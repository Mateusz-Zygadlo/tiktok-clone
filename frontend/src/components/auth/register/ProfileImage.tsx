import React, { useState, useEffect } from 'react';
import Auth from '../../layouts/Auth';

interface ComponentProps{
  setActualComponentFunc: (props: string) => void,
  changeUserProfile: (props: any) => void,
  userData: any,
}

const ProfileImage: React.FC<ComponentProps> = ({ setActualComponentFunc, changeUserProfile, userData }) => {
  const [previewImage, setPreviewImage] = useState<any>(null);
  const [fileErr, setFileErr] = useState<boolean>(false);

  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files }: any = e.target as HTMLInputElement;
    changeUserProfile(files[0]);

    if(files[0].size < 500000){
      setFileErr(false);
      const objectUrl = URL.createObjectURL(files[0])
      return setPreviewImage(objectUrl);
    }else{
      e.target.value = '';
      setPreviewImage(null);
      setFileErr(true);
    }
    console.log('Your file is too large');
  }
  const deleteImage = () => {
    setPreviewImage(null);
    changeUserProfile(null);
  }

  useEffect(() => {
    if(userData.picture){
      setPreviewImage(URL.createObjectURL(userData.picture));
    }
  }, [])

  return(
    <Auth componentName="PersonalData" setActualComponentFunc={setActualComponentFunc}>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-3xl font-semibold w-64 text-center mb-2">Next step</h1>
        <form>
          <>
            <p className="text-sm font-semibold mb-2">select a profile picture [max: 0.5mb]</p>
            <input type="file" name="img" accept=".jpg, .png" required onChange={changeInputValue} />
          </>
          {previewImage ? (
            <>
              <img src={previewImage} alt="img" className="w-64 h-64 mt-3 bg-white mx-auto" />
              <button className="font-semibold" onClick={deleteImage}>delete image</button>
            </>
          ): null}
          {fileErr ? <p>Your file is too large</p> : null}
          {userData.picture ? 
            <button type="submit" className="authButton" onClick={()=>{setActualComponentFunc('DescriptionProfile')}}>Next</button>
            :
            <button type="submit" className="authButton" onClick={()=>{setActualComponentFunc('DescriptionProfile')}}>Skip</button>
          }
        </form>
         <a href='/login' className="w-60 hover:underline pb-2">If you have an account, click here</a>
      </div>
    </Auth>
  )
}

export default ProfileImage;