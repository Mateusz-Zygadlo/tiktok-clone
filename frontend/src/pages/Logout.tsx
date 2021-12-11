import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const history = useNavigate();
  const logoutUser = async () => {
    return await axios.get('http://localhost:8000/auth/logout')
      .then((res) => history('/', {replace: true}))
  }
  
  useEffect(()=> { 
    logoutUser();
  }, [])

  return(
    <div className="w-64 p-20">
      <h1 className="text-3xl font-semibold w-9/12">You will be logged out in a moment</h1>
    </div>
  )
}

export default Logout;