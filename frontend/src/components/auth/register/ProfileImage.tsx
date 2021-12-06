import React, { useState } from 'react';
import Auth from '../../layouts/Auth';

interface ComponentProps{
  setActualComponentFunc: (props: string) => void,
}

const ProfileImage: React.FC<ComponentProps> = ({ setActualComponentFunc }) => {
  const [previewImage, setPreviewImage] = useState<any>(null);
  const [fileErr, setFileErr] = useState<boolean>(false);

  const [userData, setUserData] = useState<any>();

  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files }: any = e.target as HTMLInputElement;
    setUserData(files[0]);

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

  return(
    <Auth>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-3xl font-semibold w-64 text-center mb-2">Next step</h1>
        <form>
          <>
            <p className="text-sm font-semibold mb-2">select a profile picture [max: 0.5mb]</p>
            <input type="file" name="img" accept="image/*" required onChange={changeInputValue} />
          </>
          {previewImage ? (
            <img src={previewImage} alt="img" className="w-64 h-64 mt-3 bg-white" />
          ): null}
          {fileErr ? <p>Your file is too large</p> : null}
          <button type="submit" className="authButton" onClick={()=>{setActualComponentFunc('DescriptionProfile')}}>Next</button>
        </form>
         <a href='/register' className="w-60 hover:underline pb-2">If you have an account, click here</a>
      </div>
    </Auth>
  )
}

export default ProfileImage;