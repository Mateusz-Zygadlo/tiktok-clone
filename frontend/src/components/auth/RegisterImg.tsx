import React, { useState } from 'react';
import Auth from '../layouts/Auth';

const RegisterImg: React.FC = () => {
  const [isUrlImgage, setIsUrlImgage] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<any>(null);

  const [userData, setUserData] = useState<any>();

  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files }: any = e.target as HTMLInputElement;
    setUserData(files[0]);

    const objectUrl = URL.createObjectURL(files[0])
    setPreviewImage(objectUrl);
  }

  return(
    <Auth>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-3xl font-semibold w-64 text-center mb-2">Next step</h1>
        <form>
          {isUrlImgage ? (
            <>
              <p className="text-sm font-semibold">image url</p>
              <input type="text" name="nick" placeholder="Enter image url" className="authInput textIndent" required />
            </>
          ): (
            <>
              <p className="text-sm font-semibold mb-2">search for files on your computer</p>
              <input type="file" name="img" accept="image/*" required onChange={changeInputValue} />
            </>
          )}
          <img src={previewImage} alt="img" className="w-64 h-64 mt-3 bg-white" />
          <button type="submit" className="authButton">Next</button>
        </form>
         <a href='/register' className="w-60 hover:underline pb-2">If you have an account, click here</a>
      </div>
    </Auth>
  )
}

export default RegisterImg;