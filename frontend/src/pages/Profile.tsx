import Base from '../components/layouts/Base';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import useDecodeUser from '../hooks/useDecodeUser';

const Profile = () => {
  const [profileData, setProfileData] = useState<any>(null);
  const [owner, setOwner] = useState<any>(null);
  const [myProfile, setMyProfile] = useState<boolean>(false);
  const [following, setFollowing] = useState<boolean>(false);
  
  const [privateAccount, setPrivateAccount] = useState<boolean>(false);
  const [myInvitations, setMyInvitations] = useState<boolean>(false);
  const [accept, setAccept] = useState<boolean>(false);

  const { id } = useParams();
  const user = useDecodeUser();
  const fetchProfile = async (profileName: any) => {
    return await axios.get(`http://localhost:8000/profile/${profileName}`)
      .then((res) => setProfileData(res.data.user))
      .catch((err) => setProfileData(null))
  }
  const fetchOwner = async () => {
    if(user == null){
      return;
    }
    return await axios.get(`http://localhost:8000/profileById/${user._id}`)
      .then((res) => setOwner(res.data.user))
      .catch((err) => setOwner(null))
  }
  const isSendInvitation = () => {
    if(owner.invitations.length == 0){
      return setAccept(false);
    } 
    for(let i = 0; i < owner.invitations.length; i++){
      if(owner.invitations[i] == profileData._id){
        return setAccept(true);
      }
    }
    setAccept(false);
  }
  const isFollowing = () => {
    if(profileData && owner){
      isSendInvitation();
      if(profileData.privateAccount){
        setPrivateAccount(true);
        myInvitationsFunc();
        setFollowing(false);
        for(let i = 0; i < owner.following.length; i++){
          if(owner.following[i] == profileData._id){
            return setFollowing(true)
          }
        }
      }else{
        const isMyProfile = owner._id == profileData._id ? true : false;
        if(isMyProfile){
          return setMyProfile(true)
        }
      }
      setMyProfile(false);
    }
  }
  const myInvitationsFunc = () => {
    if(owner.invitations.length == 0){
      return setMyInvitations(false);
    }
    for(let i = 0; i < owner.invitations.length; i++){
      if(owner.invitations[i] == profileData._id){
        return setMyInvitations(true)
      }
    }
    setMyInvitations(false);
  }

  const addToFollowing = async () => {
    return await axios.post(`http://localhost:8000/followPublicProfile/${profileData._id}`, { id: user._id })
      .then((res) => {
        setFollowing(true)
        fetchProfile(id);
        fetchOwner()
      })
      .catch((err) => setFollowing(false))
  }
  const removeFollow = async () => {
    return await axios.post(`http://localhost:8000/removeFollow/${profileData._id}`, { id: user._id })
      .then((res) => {
        setFollowing(true)
        fetchProfile(id);
        fetchOwner()
      })
      .catch((err) => setFollowing(true))
  }
  const sendInvitationFunc = async () => {
    return await axios.post(`http://localhost:8000/sendInvitation/${profileData._id}`, { id: user._id })
      .then((res) => console.log(res));
  }
  const cancelSendInvitation = async () => {
    return await axios.post(`http://localhost:8000/cancelSendInvitation/${profileData._id}`, { id: user._id })
      .then((res) => console.log(res));
  }
  const acceptInvitations = async () => {
    return await axios.post(`http://localhost:8000/acceptInvitation/${profileData._id}`, { id: user._id })
      .then((res) => console.log(res));
  }
  
  useEffect(() => {
    isFollowing();
  }, [profileData, owner]);

  useEffect(() => {
    fetchOwner();
  }, [profileData])

  useEffect(() => {
    fetchProfile(id);
    fetchOwner();
  }, [])
  
  return(
    <>
      {profileData != null ? (
        <Base noPadding={true}>
          <div className="flex justify-between">
            <div className="flex">
              <img src={profileData.picture} className="w-32 h-32 rounded-full" alt="alt" />
              <div className="ml-3">
                <h1 className="text-3xl font-bold">{profileData.nick}</h1>
                <p className="text-lg">[{profileData.firstName} {profileData.lastName}]</p>
              </div>
            </div>
            <div className="flex flex-col">
              {accept ? <button onClick={acceptInvitations}>Accept invitations</button> : 
                <>
                  {following && privateAccount ? 
                    <button onClick={removeFollow}>delete follow</button>
                  : privateAccount ?
                    <>
                      <button onClick={sendInvitationFunc}>Send invitation</button>
                      <button onClick={cancelSendInvitation}> Cancel send invitation</button>
                    </>
                  : 
                    <>
                      <button onClick={addToFollowing}>follow</button>
                      <button onClick={removeFollow}>delete follow</button>
                    </>
                  }
                </>
              }
            </div>
          </div>
          <div className="flex mt-2">
            <p className="mr-3">{profileData.following.length} Following</p>
            <p className="mr-3">{profileData.followers.length} Followers</p>
            <p>{profileData.allProfileLikes} Profile likes</p>
          </div>
          <p className="font-semibold mt-2">{profileData.description}</p>
          <div className="grid grid-cols-2 text-center mt-3">
            <p className="text-xl font-semibold w-40 mx-auto cursor-pointer border-b-2 border-transparent hover:border-black transition-colors">Videos</p>
            <p className="text-xl font-semibold w-40 mx-auto cursor-pointer border-b-2 border-transparent hover:border-black transition-colors">Likes</p>
          </div>
          {profileData.privateAccount ?
            <p className="text-2xl font-semibold w-full flex justify-center mt-10">Private profile</p>
          : profileData.videos.length > 0 ? (
            <div className="gridProfileVideos mt-1 pb-5">
              {profileData.videos.map((video: any) => (
                <div className="w-full h-full bg-black videoSize"></div>
              ))}
            </div>
          ): <p className="text-2xl font-semibold w-full flex justify-center mt-10">No videos</p>}
        </Base>
      ): <div>Loading...</div>}
    </>
  )
}

export default Profile