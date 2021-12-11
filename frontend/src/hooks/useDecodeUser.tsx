import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

const useDecodeUser = () => {
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

  return user ? user : null
}

export default useDecodeUser;