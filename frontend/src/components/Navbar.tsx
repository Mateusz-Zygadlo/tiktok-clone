import React, { useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import { useNavigate } from 'react-router-dom';
import tune from '../assets/tune.svg';

interface Props{
  user: any,
}

const Navbar: React.FC<Props> = ({ user }) => {
  const [profileLeave, setProfileLeave] = useState<boolean>(false);
  const [viewMoreLeave, setViewMoreLeave] = useState<boolean>(false);
  const [openProfile, setOpenProfile] = useState<boolean>(false);
  const size = useWindowSize();
  const history = useNavigate();

  const profileMoveFunc = () => !profileLeave && setProfileLeave(true);
  const profileLeaveFunc = () => {
    setTimeout(() => {
      profileLeave && setProfileLeave(false)
    }, 500)
  };

  const viewMoreMoveFunc = () => !viewMoreLeave && setViewMoreLeave(true);
  const viewMoreLeaveFunc = () => {
    setTimeout(() => {
      viewMoreLeave && setViewMoreLeave(false);
    }, 500)
  }
 
  const toggleOpenProfile = () => setOpenProfile(!openProfile);
  const toHome = () => history('/');
  
  return(
    <div className="w-full h-14 flex justify-between items-center bg-white fixed top-0 left-0 xl:px-16">
      <div className="flex items-center cursor-pointer pl-3" title="home" onClick={toHome}>
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
        {user && user.picture ? 
          <>
            <a href='/upload'>
              <span className="material-icons cursor-pointer hover:text-red-300" title="upload video">upload_file</span>
            </a>
            <img src={user.picture || ''} alt="user profile" className="w-10 h-10 rounded-full mx-2" onMouseMove={profileMoveFunc} onMouseLeave={profileLeaveFunc} onClick={toggleOpenProfile} />
            {(size.width > 800 && profileLeave || viewMoreLeave) || size.width < 800 && openProfile ? (
              <div className="w-40 bg-white border-2 border-black absolute top-14 right-2 xl:right-24 p-2" onMouseMove={viewMoreMoveFunc} onMouseLeave={viewMoreLeaveFunc}>
                <div className="flex px-2 py-1 mb-1 cursor-pointer hover:bg-gray-100">
                  <span className="material-icons mr-2">face</span>
                  <a href={`/profile/${user.nick}`} className="font-semibold">View profile</a>
                </div>
                <div className="flex px-2 py-1 cursor-pointer hover:bg-gray-100">
                  <span className="material-icons mr-2">psychology</span>
                  <a href='/settings' className="font-semibold">Settings</a>
                </div>
                <div className="border-t-2 border-black w-full my-2"></div>
                <div className="flex items-center justify-center pb-2 py-2 cursor-pointer hover:bg-gray-100">
                  <span className="material-icons mr-2">logout</span>
                  <a href='/logout' className="font-semibold">Logout</a>
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