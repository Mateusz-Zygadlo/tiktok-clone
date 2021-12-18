import Video from '../base/Video';
import { useState, useEffect } from 'react';
import axios from 'axios';
import useDecodeUser from '../../hooks/useDecodeUser';

const HomeVideos = () => {
  const [videos, setVideos] = useState<any>(null);
  const [owner, setOwner] = useState<any>(null);
  const user = useDecodeUser();

  const getVideos = async () => {
    return await axios.get('http://localhost:8000/allVideos')
      .then((res) => setVideos(res.data))
      .catch((err) => console.log('error from server'))
  }
  const fetchOwner = async () => {
    if(!user || !user._id){
      return;
    }
    return await axios.get(`http://localhost:8000/profileById/${user._id}`)
      .then((res) => {
        setOwner(res.data.user);
      })
      .catch((err) => setOwner(null))
  }

  useEffect(() => {
    getVideos();
    fetchOwner();
  }, [])

  useEffect(() => {
    fetchOwner();
  }, [videos])

  return(
    <div className="py-5">
      {videos && videos.result && owner && owner._id && (
        <>
          {videos.result.map((video: any, index: number) => (
            <Video 
              ownerVideo={video.owner == owner._id ? true : false}
              following={video.owner == owner._id ? true : false}
              key={index} 
              profileImageUrl={video.profileImageUrl}
              nick={video.nick} 
              firstName={video.firstName}
              lastName={video.lastName}
              description={video.description}
              video={video.video}
              owner={video.owner}
              videoId={video._id}
            />
          ))}
        </>
      )}
    </div>
  )
}

export default HomeVideos;