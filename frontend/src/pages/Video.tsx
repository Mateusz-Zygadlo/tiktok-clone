import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Comment from "../components/base/Comment";
import useWindowSize from '../hooks/useWindowSize';
import useDecodeUser from '../hooks/useDecodeUser';
import MobileComments from "../components/base/MobileComments";
import axios from 'axios';

const Video = () => {
  const [mobileComments, setMobileComments] = useState<boolean>(false);
  const [video, setVideo] = useState<any>(null);
  const [comment, setComment] = useState<string>('');
  const [comments, setComments] = useState<any>(null);
  
  const size = useWindowSize();
  const user = useDecodeUser();
  const history = useNavigate();
  const { id } = useParams();
  const toHome = () => history('/');
  
  const closeMobileComments = (props: boolean) => setMobileComments(props); 
  const changeComment = (e: React.ChangeEvent<HTMLInputElement>) => setComment(e.target.value);
  
  const getVideo = async (id: any) => {
    return await axios.get(`http://localhost:8000/video/${id}`)
      .then((res) => {
        setVideo(res.data);
        return getComments();
      })
      .catch((err) => console.log('error from server'))
  }
  const addComment = async () => {
    if(comment.length < 0){
      return console.log(false)
    }
    return await axios.post(`http://localhost:8000/addComment/${id}`, { user, comment })
      .then((res) => {
        setComment('');
        return getComments();
    })
      .catch((err) => console.log('error from server'))
  }
  const getComments = async () => {
    return await axios.get(`http://localhost:8000/comments/${id}`)
      .then((res) => setComments(res.data))
      .catch((err) => console.log('error fromm server'))
  }

  useEffect(() => {
    getVideo(id);
  }, [])

  return(
    <>
      {video ? 
        <>
        <div className={`${size.width > 1050 ? 'gridVideoPage' : 'w-full'}`}>
          <div className="bg-black h-screen text-white relative">
            <div className="h-full">
              <video className="h-screen mx-auto" controls>
                  <source src={video.result.video} type="video/mp4"/>
              </video>
            </div>
            <span className="material-icons absolute top-5 left-5 text-3xl cursor-pointer" onClick={toHome}>close</span>
            <div className={`absolute ${size.width < 1050 ? 'top-1/3' : 'top-1/2' } right-5`}>
              <div className="ml-3 flex flex-col items-center">
                {size.width < 1050 && (
                  <>
                    <span className="material-icons text-3xl text-red-300 cursor-pointer mb-3">favorite_border</span>
                    <span className="material-icons text-2xl mb-3 cursor-pointer" title="comments" onClick={()=>{setMobileComments(true)}}>fireplace</span>
                    <span className="material-icons text-2xl">send</span>
                  </>
                )}
              </div>
            </div>
          </div>
          {size.width > 1050 ? 
            <div className="bg-gray-100 h-screen overflow-y-scroll">
              <div className="p-4 fixed bg-white widthVideoPage h-screen">
                <div className="mt-5 flex justify-between mr-5">
                  <div className="flex">
                    <img src={video.result.profileImageUrl} className="w-12 h-12 rounded-full" alt="alt" />
                    <div className="ml-3">
                      <h1 className="font-semibold">{video.result.nick}</h1>
                      <p>[{video.result.firstName} {video.result.lastName}]</p>
                    </div>
                  </div>
                  <button>Follow</button>
                </div>
                <p className="mt-3">{video.result.description}</p>
                <div className="mt-4 flex">
                  <span className="material-icons">favorite</span>
                  <span className="material-icons">chat</span>
                </div>
                {comments && comments.result ? 
                  <div className="p-2 overflow-y-scroll commentsDivHeight">
                    {comments.result.map((comment: any, index: number) => (
                      <Comment
                        key={index}
                        profileImageUrl={comment.profileImageUrl}
                        nick={comment.nick}
                        description={comment.description}
                        date={comment.createdAt}
                      />
                    ))}
                  </div>
                : <div>Loading...</div>}
                <div className="flex justify-around p-2">
                  <input name="comment" className="w-96 border-b-2 border-black focus:outline-none" onChange={changeComment} />
                  <button onClick={addComment}>Post</button>
                </div>
              </div>
            </div>
          : null }
        </div>
        {mobileComments && (
          <MobileComments closeMobileComments={closeMobileComments} />
        )}
      </>
     : <div>Loading...</div>}
    </>
  )
}

export default Video;