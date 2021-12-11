import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import Navbar from '../components/Navbar';

const Home = () => {
  const [user, setUser] = useState<any>(null);
  
  const decodeUser = () => {
    const userToken = document.cookie.split(' ')[0].split('=')[1];
    if(!userToken){
      return;
    }
    const decoded: any = jwt_decode(userToken);
    setUser({...decoded._doc});
  }

  useEffect(() => {
    decodeUser();
  }, [])
  
  return(
    <>
      {user && user.picture ? <Navbar userImageProfile={user.picture} />
      : <Navbar userImageProfile={null} />}
      <div className="w-full flex justify-around text-2xl font-semibold">
        {user && user.email ? 
          <Link to="/">
            <p className="hover:text-red-300 transition-colors">Home</p>
          </Link>
        : <Link to="/register" replace>
            <p className="hover:text-red-300 transition-colors">Register</p>
          </Link>
        }
        {user && user.email ? 
          <Link to="/logout" replace>
            <p className="hover:text-red-300 transition-colors">Logout</p>
          </Link>
        : <Link to="/login" replace>
            <p className="hover:text-red-300 transition-colors">Login</p>
          </Link>
        }
      </div>
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
    </>
  )
}

export default Home;