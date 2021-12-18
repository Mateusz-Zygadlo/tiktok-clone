import Base from '../components/layouts/Base';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useDecodeUser from '../hooks/useDecodeUser';

const Settings = () => {
  const [privateAccount, setPrivateAccount] = useState<boolean>(false);
  const [first, setFirst] = useState<boolean>(true);
  const [owner, setOwner] = useState<any>(null);
  const user = useDecodeUser();
  const history = useNavigate();
  
  const togglePrivateAccount = async () => {
    setPrivateAccount(!privateAccount);
    return await axios.post(`http://localhost:8000/togglePrivateAccount/${user._id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log('error from server'))
  }
  const fetchOwner = async () => {
    return await axios.get(`http://localhost:8000/profileById/${user._id}`)
      .then((res) => {
        setOwner(res.data.user);
      })
      .catch((err) => setOwner(null))
  }
  const deleteUser = async () => {
    return await axios.post(`http://localhost:8000/deleteProfile/${user._id}`)
      .then((res) => {
        if(res.data){
          return history('/')
        }
      })
  }

  useEffect(() => {
    if(user && first){
      fetchOwner();
      setFirst(false);
    }
  })

  useEffect(() => {
    if(owner){
      setPrivateAccount(owner.privateAccount);
    }
  }, [owner])

  return(
    <Base removeLeftbar={true}>
      <div className="mt-3">
        <h1 className="text-3xl">Manage account</h1>
        <div className="p-2">
          <h2 className="text-xl">Account control</h2>
          <div className="mt-2 flex justify-between">
            <p>Delete account</p>
            <button onClick={deleteUser}>Delete</button>
          </div>
        </div>
        <div className="w-full border-b-2 border-black"></div>
        <h1 className="text-3xl mt-2">Privacy</h1>
        <div className="p-2">
          <h2 className="text-xl">Discoverability</h2>
          <div className="mt-2 flex justify-between">
            <p>Private account</p>
            <input type="checkbox" onChange={togglePrivateAccount} checked={privateAccount ? true : false } />
          </div>
        </div>
        <a href="/profile" className="text-xl border-b-2 hover:border-black transition-colors">Back</a>
      </div>
    </Base>
  )
}

export default Settings;