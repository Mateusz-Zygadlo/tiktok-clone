import React from 'react';
import useDecodeUser from "../hooks/useDecodeUser";
import useWindowSize from '../hooks/useWindowSize';
import SmallProfile from "./base/SmallProfile";

interface Props{
  user: any,
}

const Leftbar: React.FC<Props> = ({ user }) => {
  const size = useWindowSize();
  const mobileWidth: number = 1050;

  return(
    <div className={`${size.width > 1050 ? 'w-72' : 'w-16 flex flex-col items-center'} leftbarHeightCalc pb-5 overflow-y-auto overflow-x-hidden fixed top-14 pl-3 left-0 bg-white xl:ml-16`}>
      <div className="mt-3 pb-1">
        <div className="flex items-center hover:bg-gray-100 p-2 cursor-pointer transition-colors">
          <span className="material-icons text-3xl">bed</span>
          {size.width > mobileWidth && (
            <p className="text-xl ml-3 font-semibold">For You</p>
          )}
        </div>
        <div className="flex items-center hover:bg-gray-100 p-2 cursor-pointer transition-colors">
          <span className="material-icons text-3xl">sentiment_satisfied_alt</span>
          {size.width > mobileWidth && (
            <p className="text-xl ml-3 font-semibold">Following</p>
          )}
        </div>
      </div>
      <div className="border-b-2 border-black w-full my-2"></div>
      <div className={`${size.width > mobileWidth ? 'pl-2' : null}`}>
        {size.width > mobileWidth && (
          <p className="mb-2 mt-1 font-semibold">Suggested accounts</p>
        )}
        {user && (
          <SmallProfile
            profileLink={user.picture}
            nick={user.nick}
            firstName={user.firstName}
            lastName={user.lastName} />
        )}
      {size.width > mobileWidth && (
        <p className="mt-1 text-sm text-red-300 font-semibold hover:text-red-400 w-12 cursor-pointer transition-colors">See all</p>
      )}
      </div>
      <div className="border-b-2 border-black w-full my-2"></div>
      <div className={`${size.width > mobileWidth ? 'pl-2' : null}`}>
        {size.width > mobileWidth && (
          <p className="mb-2 mt-1 font-semibold">Following accounts</p>
        )}
        {user && (
          <>
            <SmallProfile
              profileLink={user.picture}
              nick={user.nick}
              firstName={user.firstName}
              lastName={user.lastName} />
          </>
        )}
        {size.width > mobileWidth && (
          <p className="mt-1 text-sm text-red-300 font-semibold hover:text-red-400 w-12 cursor-pointer transition-colors">See all</p>
        )}      
      </div>
      {size.width > mobileWidth && (
        <>
          <div className="w-full my-2 border-t-2 border-black"></div>
          <div className="p-2">
            <p className="text-sm text-gray-800 font-semibold hover:text-black w-12 cursor-pointer transition-colors">Discover</p>
            <div className="mt-2 flex flex-wrap">
              <p className="border-2 border-black p-1 m-1">break wordsbreak</p>
              <p className="border-2 border-black p-1 m-1">test</p>
              <p className="border-2 border-black p-1 m-1">this is</p>
              <p className="border-2 border-black p-1 m-1">test</p>
              <p className="border-2 border-black p-1 m-1">test</p>
              <p className="border-2 border-black p-1 m-1">test</p>
              <p className="border-2 border-black p-1 m-1">test this is</p>
              <p className="border-2 border-black p-1 m-1">test</p>
              <p className="border-2 border-black p-1 m-1">test</p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Leftbar;