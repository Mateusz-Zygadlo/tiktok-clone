import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Comment from "../components/base/Comment";
import useWindowSize from '../hooks/useWindowSize';
import MobileComments from "../components/base/MobileComments";

const Video = () => {
  const [mobileComments, setMobileComments] = useState<boolean>(false);
  const size = useWindowSize();
  const history = useNavigate();
  const closeMobileComments = (props: boolean) => setMobileComments(props); 
  const toHome = () => history('/');

  return(
    <>
      <div className={`${size.width > 1050 ? 'gridVideoPage' : 'w-full'}`}>
        <div className="bg-black h-screen text-white relative">
          <div className="w-full h-full"></div>
          <span className="material-icons absolute top-5 left-5 text-3xl cursor-pointer" onClick={toHome}>close</span>
          <div className="absolute top-5 right-5 flex">
            <span className="material-icons">flag</span>
            <p className="text-white">Report</p>
          </div>
          <div className={`absolute ${size.width < 1050 ? 'top-1/3' : 'top-1/2' } right-5`}>
            <div className="ml-3 flex flex-col items-center">
              <span className="material-icons text-3xl">expand_more</span>
              {size.width < 1050 && (
                <>
                  <span className="material-icons text-3xl text-red-300 cursor-pointer mb-3">favorite_border</span>
                  <span className="material-icons text-2xl mb-3 cursor-pointer" title="comments" onClick={()=>{setMobileComments(true)}}>fireplace</span>
                  <span className="material-icons text-2xl">send</span>
                </>
              )}
            </div>
          </div>
          <span className="material-icons absolute bottom-5 right-5 text-3xl">volume_up</span>
        </div>
        {size.width > 1050 ? 
          <div className="bg-gray-100 h-screen overflow-y-scroll">
            <div className="p-2 fixed bg-white widthVideoPage">
              <div className="mt-5 flex justify-between mr-5">
                <div className="flex">
                  <img src="http://localhost:8000/public-1639159844793-149-1495532_gwent-tracker-home-good-profile-picture-for-discord.png" className="w-12 h-12 rounded-full" alt="alt" />
                  <div className="ml-3">
                    <h1 className="font-semibold">Nick</h1>
                    <p>[firstName lastName]</p>
                  </div>
                </div>
                <button>Follow</button>
              </div>
              <p className="mt-3">Description</p>
              <p className="font-semibold">#hashtags</p>
              <div className="mt-4 flex justify-between">
                <div>
                  <span className="material-icons">favorite</span>
                  <span className="material-icons">chat</span>
                </div>
                <div className="flex">
                  <p>Shape to</p>
                  <span className="material-icons ml-2">html</span>
                  <span className="material-icons ml-2">javascript</span>
                </div>
              </div>
              <div className="p-2 overflow-y-scroll max-h-96">
                <Comment
                  profileImageUrl="http://localhost:8000/public-1639160372301-1.1.png"
                  nick="Mateusz"
                  description="This is awesome vidoe. Good job"
                  date="12-4"
                  commentLikes={123} />
              </div>
              <div className="flex justify-around p-2">
                <input className="w-96 border-b-2 border-black focus:outline-none" />
                <button>Post</button>
              </div>
            </div>
          </div>
        : null }
      </div>
      {mobileComments && (
        <MobileComments closeMobileComments={closeMobileComments} />
      )}
    </>
  )
}

export default Video;