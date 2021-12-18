import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useDecodeUser from '../../hooks/useDecodeUser';

interface Props{
  profileImageUrl: string,
  nick: string,
  firstName: string,
  lastName: string,
  description: string,
  video: string,
  owner: string,
  videoId: any,
  getVideos: () => void,
  likes: any,
  currentUser: any,
}

const Video: React.FC<Props> = ({ profileImageUrl, nick, firstName, lastName, description, video, videoId, getVideos, likes, currentUser}) => {
  const history = useNavigate();
  const goToCurrentVideo = (props: any) =>  history(`/video/${props}`)
  const [like, setLike] = useState<boolean>(false);
  const user = useDecodeUser();

  const toggleLike = async () => {
    setLike(!like);
    return await axios.post(`http://localhost:8000/videoLike/${videoId}`, { user })
      .then((res) => getVideos())
      .catch((err) => console.log('error from server'))
  }
  const isLikedVideo = () => {
    for(let i = 0; i < likes.length; i++){
      if(likes[i] == currentUser){
        setLike(true)
      }
    }
  }

  useEffect(() => {
    isLikedVideo();
  }, [])

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
          <a href={`/profile/${nick}`} className="mr-5 px-3 py-1 font-semibold text-red-500 border-2 border-red-500 hover:border-red-600 hover:text-red-600 transition-colors">check profile</a>
        </div>
        <div className="mb-3">
          <p className="mr-2 w-72 break-words">{description}</p>
        </div>
        <div className="flex items-end">
          <video className="border-2 border-red-300 w-72 homeVideoSize" controls>
                <source src={video} type="video/mp4"/>
          </video>
          <div className="ml-3 flex flex-col">
            <div className="mb-3 flex flex-col items-center">
              <span className="material-icons text-4xl text-red-300 cursor-pointer" onClick={toggleLike}>{like ? 'favorite' : 'favorite_border'}</span>
              <p>{likes.length}</p>
            </div>
            <span className="material-icons text-3xl mb-3 cursor-pointer" onClick={()=>{goToCurrentVideo(videoId)}}>fireplace</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video;