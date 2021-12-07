import Auth from '../../layouts/Auth';

interface ComponentProps{
  setActualComponentFunc: (props: string) => void,
  changeUserData: (props: any) => void,
  userData: any
}

const DescriptionProfile: React.FC<ComponentProps> = ({ setActualComponentFunc, changeUserData, userData }) => {
  return(
    <Auth componentName="ProfileImage" setActualComponentFunc={setActualComponentFunc}>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-3xl font-semibold w-64 text-center mb-2">Description profile</h1>
        <form>
          <p className="text-sm font-semibold">description profile</p>
          <textarea onChange={changeUserData} value={userData.description} name="description" placeholder="Description profile" className="authInput textIndent px-1 h-40" required></textarea>
          <button type="submit" className="authButton" onClick={()=>{setActualComponentFunc("Result")}}>Next</button>
        </form>
         <a href='/register' className="w-60 hover:underline pb-2">If you have an account, click here</a>
      </div>
    </Auth>
  )
}

export default DescriptionProfile;