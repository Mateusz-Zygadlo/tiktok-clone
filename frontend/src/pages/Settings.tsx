import Navbar from '../components/Navbar';
import useDecodeUser from '../hooks/useDecodeUser';

const Settings = () => {
  const user = useDecodeUser();

  return(
    <div className="xl:px-24">
      {user && user.picture ? <Navbar userImageProfile={user.picture} />
      : <Navbar userImageProfile={null} />}
      <div className="w-28.125 mx-auto mt-5 p-2">
        <h1 className="text-3xl">Manage account</h1>
        <div className="p-2">
          <h2 className="text-xl">Account control</h2>
          <div className="mt-2 flex justify-between">
            <p>Delete account</p>
            <a href="#">Delete</a>
          </div>
        </div>
        <div className="w-full border-b-2 border-black"></div>
        <h1 className="text-3xl mt-2">Privacy</h1>
        <div className="p-2">
          <h2 className="text-xl">Discoverability</h2>
          <div className="mt-2 flex justify-between">
            <p>Private account</p>
            <input type="checkbox" />
          </div>
        </div>
        <a href="/profile" className="text-xl border-b-2 hover:border-black transition-colors">Back</a>
      </div>
    </div>
  )
}

export default Settings;