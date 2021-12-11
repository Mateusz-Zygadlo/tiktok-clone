import React, { ReactChild, ReactChildren } from "react";
import { Link } from 'react-router-dom';

interface Children{
  children: ReactChild | ReactChildren,
  closeButton?: boolean,
  setActualComponentFunc: (props: string) => void,
  componentName: string,
}

const Auth: React.FC<Children> = ({ children, closeButton, setActualComponentFunc, componentName }) => {
  return(
    <div className="flex justify-center">
      <div className="absolute top-0 left-0 w-screen h-screen z-0"></div>
      <div className="authWidth border-2 border-black mx-auto mt-10 p-5 z-20">
        <div className="bg-gray-200">
          <div className="w-full flex justify-between cursor-pointer">
            <span className="material-icons authSpan text-2xl" onClick={()=>{setActualComponentFunc(componentName)}}>arrow_back_ios</span>
            <Link to='/' replace>
              <span className="material-icons authSpan text-3xl">close</span>
            </Link>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Auth;