import { useState } from 'react';
import MobileComments from './MobileComments';

interface Props{
  profileImageUrl: string,
  nick: string,
  firstName: string,
  lastName: string,
  description: string,
  video: string,
  owner: string,
  following: boolean,
  ownerVideo: boolean,
}

const Video: React.FC<Props> = ({ profileImageUrl, nick, firstName, lastName, description, video, owner, following, ownerVideo }) => {
  const [like, setLike] = useState<boolean>(false);
  const [isFollowing, setFollowing] = useState<boolean>(false);
  const [mobileComments, setMobileComments] = useState<boolean>(false);
  
  const toggleLike = () => setLike(!like); 
  const toggleFollowing = () => setFollowing(!following);
  const closeMobileComments = (props: boolean) => setMobileComments(props); 

  return(
    <div className="flex mb-3 relative">
      <div className="w-14">
        <img src={profileImageUrl} className="w-12 h-12 rounded-full" />
      </div>
      <div className="videoAuthorWidth pl-2">
        <div className="flex justify-between items-center">
          <div className="flex">
            <h1 className="mr-3 text-xl font-semibold max-w-40 break-words">{nick}</h1>
            <p className="text-md w-52 break-words">[{firstName} {lastName}]</p>
          </div>
          {ownerVideo ?
            <button className="mr-5 px-3 py-1 font-semibold border-2 border-transparent text-white bg-red-500 hover:bg-red-500 transition-colors" onClick={toggleFollowing}>Your video</button>
          : following ? 
            <button className="mr-5 px-3 py-1 font-semibold border-2 border-transparent text-white bg-red-500 hover:bg-red-500 transition-colors" onClick={toggleFollowing}>Following</button>
          : 
            <button className="mr-5 px-3 py-1 font-semibold text-red-500 border-2 border-red-500 hover:border-red-600 hover:text-red-600 transition-colors" onClick={toggleFollowing}>Follow</button>
          }
        </div>
        <div className="mb-3">
          <p className="mr-2 w-72 break-words">{description}</p>
        </div>
        <div className="flex items-end">
          <video className="border-2 border-red-300 w-72 homeVideoSize" controls>
                <source src={video} type="video/mp4"/>
          </video>
          <div className="ml-3 flex flex-col">
            <span className="material-icons text-4xl text-red-300 cursor-pointer mb-3" onClick={toggleLike}>{like ? 'favorite' : 'favorite_border'}</span>
            <span className="material-icons text-3xl mb-3" onClick={()=>{setMobileComments(true)}}>fireplace</span>
          </div>
        </div>
      </div>
      {mobileComments ? <div className="absolute -left-2 top-2 commentSectionWidth commentSectionHeight">
        <MobileComments 
          closeMobileComments={closeMobileComments}
          id={owner} />
      </div> : null}
    </div>
  )
}

export default Video;