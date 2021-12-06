import React, { useState } from 'react';
import Auth from '../../layouts/Auth';

interface ComponentProps{
  setActualComponentFunc: (props: string) => void,
}

const DescriptionProfile: React.FC<ComponentProps> = ({ setActualComponentFunc }) => {
  return(
    <Auth>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-3xl font-semibold w-64 text-center mb-2">Next step</h1>
        <form>
          <p className="text-sm font-semibold">description profile</p>
          <textarea name="email" placeholder="Description profile" className="authInput textIndent px-1 h-40" required></textarea>
          <button type="submit" className="authButton" onClick={()=>{setActualComponentFunc("Result")}}>Next</button>
        </form>
         <a href='/register' className="w-60 hover:underline pb-2">If you have an account, click here</a>
      </div>
    </Auth>
  )
}

export default DescriptionProfile;