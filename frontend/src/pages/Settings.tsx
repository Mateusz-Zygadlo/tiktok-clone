import Base from '../components/layouts/Base';

const Settings = () => {
  return(
    <Base removeLeftbar={true}>
      <div className="mt-3">
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
    </Base>
  )
}

export default Settings;