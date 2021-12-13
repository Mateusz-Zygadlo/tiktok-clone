import Base from '../components/layouts/Base';
import useDecodeUser from '../hooks/useDecodeUser';

const Profile = () => {
  const user = useDecodeUser();
  
  return(
    <Base noPadding={true}>
      <div className="flex">
        <img src="http://localhost:8000/public-1639159844793-149-1495532_gwent-tracker-home-good-profile-picture-for-discord.png" className="w-32 h-32 rounded-full" alt="alt" />
        <div className="ml-3">
          <h1 className="text-3xl font-bold">{user ? user.nick : 'nickname'}</h1>
          <p className="text-lg">[{user ? user.firstName : 'firstName'} {user ? user.lastName : 'lastName'}]</p>
        </div>
      </div>
      <div className="flex mt-2">
        <p className="mr-3">{user ? user.following.length : 0} Following</p>
        <p className="mr-3">{user ? user.followers.length : 0} Followers</p>
        <p>{user ? user.allProfileLikes : 0} Profile likes</p>
      </div>
      <p className="font-semibold mt-2">Description</p>
      <div className="grid grid-cols-2 text-center mt-3">
        <p className="text-xl font-semibold w-40 mx-auto cursor-pointer border-b-2 border-transparent hover:border-black transition-colors">Videos</p>
        <p className="text-xl font-semibold w-40 mx-auto cursor-pointer border-b-2 border-transparent hover:border-black transition-colors">Likes</p>
      </div>
      <div className="gridProfileVideos mt-1 pb-5">
        <div className="w-full h-full bg-black videoSize"></div>
        <div className="w-full h-full bg-black videoSize"></div>
        <div className="w-full h-full bg-black videoSize"></div>
        <div className="w-full h-full bg-black videoSize"></div>
        <div className="w-full h-full bg-black videoSize"></div>
        <div className="w-full h-full bg-black videoSize"></div>
        <div className="w-full h-full bg-black videoSize"></div>
        <div className="w-full h-full bg-black videoSize"></div>
        <div className="w-full h-full bg-black videoSize"></div>
        <div className="w-full h-full bg-black videoSize"></div>
      </div>
    </Base>
  )
}

export default Profile