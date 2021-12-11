import React, { useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import tune from '../assets/tune.svg';

interface Props{
  userImageProfile?: any
}

const Navbar: React.FC<Props> = ({ userImageProfile }) => {
  const [profileLeave, setProfileLeave] = useState<boolean>(false);
  const [viewMoreLeave, setViewMoreLeave] = useState<boolean>(false);
  const [openProfile, setOpenProfile] = useState<boolean>(false);
  const size = useWindowSize();

  const profileMoveFunc = () => !profileLeave && setProfileLeave(true);
  const profileLeaveFunc = () => {
    setTimeout(() => {
      profileLeave && setProfileLeave(false)
    }, 1000)
  };

  const viewMoreMoveFunc = () => !viewMoreLeave && setViewMoreLeave(true);
  const viewMoreLeaveFunc = () => {
    setTimeout(() => {
      viewMoreLeave && setViewMoreLeave(false);
    }, 1000)
  }
 
  const toggleOpenProfile = () => setOpenProfile(!openProfile);
  
  return(
    <div className="w-full flex justify-between items-center xl:px-24 p-2">
      <div className="flex items-center cursor-pointer" title="home">
        <img src={tune} alt="a hand-drawn note in a photopea" />
        <p className="text-2xl font-extrabold">TikTok</p>
      </div>
      {size.width > 800 ? (
        <div className="flex items-center">
          <input type="search" name="search" placeholder="Search profiles" id="Search" className="w-72 p-1 outline-none border-b-2 border-gray-300 hover:border-gray-400 transition-colors focus:border-red-300" />
          <span className="material-icons ml-3 cursor-pointer hover:text-red-300 transition-colors" title="search">chair_alt</span>
        </div>
      ): null}
      <div className="flex items-center">
        {userImageProfile ? 
          <>
            <span className="material-icons cursor-pointer hover:text-red-300" title="upload video">upload_file</span>
            <img src={userImageProfile || ''} alt="user profile" className="w-10 h-10 rounded-full ml-2" onMouseMove={profileMoveFunc} onMouseLeave={profileLeaveFunc} onClick={toggleOpenProfile} />
            {(size.width > 800 && profileLeave || viewMoreLeave) || size.width < 800 && openProfile ? (
              <div className="w-40 bg-white border-2 border-black absolute top-14 right-2 xl:right-24 p-2" onMouseMove={viewMoreMoveFunc} onMouseLeave={viewMoreLeaveFunc}>
                <div className="flex px-2 py-1 mb-1 cursor-pointer hover:bg-gray-100">
                  <span className="material-icons mr-2">face</span>
                  <p className="font-semibold">View profile</p>
                </div>
                <div className="flex px-2 py-1 mb-2 cursor-pointer hover:bg-gray-100">
                  <span className="material-icons mr-2">psychology</span>
                  <p className="font-semibold">Settings</p>
                </div>
                <div className="flex items-center justify-center px-2 py-2 cursor-pointer border-t-2 border-black hover:bg-gray-100">
                  <span className="material-icons mr-2">logout</span>
                  <p className="font-semibold">Logout</p>
                </div>
              </div>
            ): null}
          </>
        :
          <a href='/login' className="text-2xl font-semibold pr-2 hover:text-red-300 cursor-pointer transition-colors">Login</a>
        }
      </div>
    </div>
  )
}

export default Navbar;