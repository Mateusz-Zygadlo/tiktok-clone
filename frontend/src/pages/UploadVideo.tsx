import Base from '../components/layouts/Base';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useDecodeUser from '../hooks/useDecodeUser';

interface Video{
  uploadVideo: any,
  caption: string,
  whoViewVideo: string,
  comments: boolean,
}

const UploadVideo = () => {
  const user = useDecodeUser();
  const [video, setVideo] = useState<Video>({
    uploadVideo: null,
    caption: '',
    whoViewVideo: 'public',
    comments: true,
  })
  const history = useNavigate();
  const toHome = () => history('/');
  const toggleCheckbox = () => setVideo({...video, comments: !video.comments})
  const changeCaption = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setVideo({...video, [name]: value});
  }
  const captionLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if(value.length < 151){
      return changeCaption(e); 
    }
  }
  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files }: any = e.target as HTMLInputElement;

    if(files[0].size < 50000000){
      setVideo({...video, uploadVideo: files[0]})
    }
  }
  const submitVideo = () => {
    const { uploadVideo, caption } = video;
    if(uploadVideo && caption){
      return sendFile();
    }
    console.log(false);
  }
  const createFile = async (imageName: any) => {
    return await axios.post('http://localhost:8000/image/schema', {video, imageName, user})
      .then((res) => updateUserVideos(res.data.imageName))
      .catch((err) => console.log('error from server'))
  }
  const sendFile = async () => {
    const data = new FormData();
    data.append('file', video.uploadVideo)
    
    return axios.post('http://localhost:8000/image/upload', data, {headers: {'Content-Type': 'multipart/form-data'}})
      .then((res) => createFile(res.data.imageName))
      .catch((err) => console.log('error from server'))
  }
  const updateUserVideos = async (videoName: any) => {
    return await axios.post('http://localhost:8000/image/updateProfile', {videoName, _id: user._id})
      .then((res) => {
        if(res && res.data){
          return history('/', {replace: true})
        }
      })
      .catch((err) => console.log('error from server'))
  }

  return(
    <Base removeLeftbar={true}>
      <div className="mt-5">
        <input type="file" className="mb-3" onChange={changeInputValue} />
        <div>
          <div className="flex items-center justify-between">
            <h1 className="mr-3 text-3xl font-semibold">Caption:</h1>
            <p>[{video.caption.length}/150]</p>
          </div>
          <input name="caption" type="text" className="w-full mt-2 border-b-2 border-black focus:outline-none" onChange={captionLength} value={video.caption} />
        </div>
        <div>
          <h1 className="text-xl mt-3 font-semibold">Who can view this video</h1>
          <select name="whoViewVideo" className="focus:outline-none text-lg border-2 border-black my-1" onChange={changeCaption}>
            <option value="public">Public</option>
            <option value="friends">Friends</option>
            <option value="private">Private</option>
          </select>
        </div>
        <div className="my-3">
          <h1 className="text-xl">Allow users to:</h1>
          <div className="flex items-center">
            <input type="checkbox" name="comments" checked={video.comments ? true : false} onClick={toggleCheckbox} />
            <p className="ml-3">Comment</p>
          </div>
        </div>
        <div className="w-full flex justify-around">
          <button className="border-2 border-black px-2 font-semibold text-white bg-black rounded-md text-xl" onClick={toHome}>Discard</button>
          <button className="border-2 border-red-300 px-2 font-semibold text-white bg-red-300 rounded-md text-xl" onClick={submitVideo}>Post</button>
        </div>
      </div>
    </Base>
  )
}

export default UploadVideo;