import React, { useState } from 'react';
import Auth from '../../layouts/Auth';

const Result: React.FC = () => {
  return(
    <Auth>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-3xl font-semibold w-64 text-center mb-2">Final result</h1>
        <div className="flex justify-center flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-black"></div>
          <h1 className="text-2xl font-extrabold">Nickname</h1>
          <h2 className="text-md">FirstName lastName</h2>
          <p className="text-lg font-semibold mt-2">This is description profile</p>
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