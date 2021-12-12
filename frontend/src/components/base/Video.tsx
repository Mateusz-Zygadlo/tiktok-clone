import { useState } from 'react';

const Video = () => {
  const [like, setLike] = useState<boolean>(false);
  const [following, setFollowing] = useState<boolean>(false);
  
  const toggleLike = () => setLike(!like); 
  const toggleFollowing = () => setFollowing(!following);

  return(
    <div className="flex mb-3">
      <div className="w-14">
        <img src="http://localhost:8000/public-1639159844793-149-1495532_gwent-tracker-home-good-profile-picture-for-discord.png" className="w-12 h-12 rounded-full" />
      </div>
      <div className="w-full pl-2">
        <div className="flex justify-between items-center">
          <div className="flex">
            <h1 className="mr-3 text-xl font-semibold max-w-40 break-words">nick</h1>
            <p className="text-md w-52 break-words">[firstName lastName]</p>
          </div>
          {following ? 
            <button className="mr-5 px-3 py-1 font-semibold border-2 border-transparent text-white bg-red-500 hover:bg-red-500 transition-colors" onClick={toggleFollowing}>Following</button>
          : 
            <button className="mr-5 px-3 py-1 font-semibold text-red-500 border-2 border-red-500 hover:border-red-600 hover:text-red-600 transition-colors" onClick={toggleFollowing}>Follow</button>
          }
        </div>
        <div className="mb-3">
          <p className="mr-2 w-72 break-words">Description</p>
          <p className="font-semibold w-72 break-words">#hashtags</p>
        </div>
        <div className="flex items-end">
          <div className="border-2 border-red-300 w-72 homeVideoSize"></div>
          <div className="ml-3 flex flex-col">
            <span className="material-icons text-4xl text-red-300 cursor-pointer mb-3" onClick={toggleLike}>{like ? 'favorite' : 'favorite_border'}</span>
            <span className="material-icons text-3xl mb-3">fireplace</span>
            <span className="material-icons text-3xl">send</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video;