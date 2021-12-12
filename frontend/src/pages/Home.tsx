import Navbar from '../components/Navbar';
import useDecodeUser from '../hooks/useDecodeUser';
import Leftbar from '../components/Leftbar';

const Home = () => {
  const user = useDecodeUser();

  return(
    <div className="xl:px-24">
      {user && user.picture ? <Navbar userImageProfile={user.picture} />
      : <Navbar userImageProfile={null} />}
      <div className="flex">
        <Leftbar />
        <div className="ml-3">
          <h1 className="w-full text-4xl flex justify-center my-3">Welcome to tiktok clone</h1>
          {user && (
            <div className="flex justify-center items-center flex-col">
              <h1 className="text-3xl font-semibold w-64 text-center mb-2">Your profile</h1>
              <div className="flex justify-center flex-col items-center w-64">
                <img src={user.picture} alt="img" className="w-20 h-20 rounded-full" />
                <h1 className="text-2xl font-extrabold">{user.nick}</h1>
                <h2 className="text-md">[{user.firstName} {user.lastName}]</h2>
                <div className="w-64 flex justify-center">
                  <p className="text-lg font-semibold mt-2 break-words text-center">{user.description}</p>
                </div>
              </div>
            </div>
          )}
          </div>
      </div>
    </div>
  )
}

export default Home;