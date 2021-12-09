import Auth from '../../layouts/Auth';

interface ComponentProps{
  setActualComponentFunc: (props: string) => void,
  changeUserData: (props: any) => void,
  userData: any,
  getInputLength: (e: any) => void,
  maxLength: any,
}

const DescriptionProfile: React.FC<ComponentProps> = ({ setActualComponentFunc, userData, getInputLength, maxLength }) => {
  return(
    <Auth componentName="ProfileImage" setActualComponentFunc={setActualComponentFunc}>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-3xl font-semibold w-64 text-center mb-2">Description profile</h1>
        <form>
          <div className="flexDivRegister">
            <p className="pRegister">description profile</p>
            <p className="pRegister">[{maxLength.description}/100]</p>
          </div>
          <textarea onChange={getInputLength} value={userData.description} name="description" placeholder="Description profile" className="authInput textIndent px-1 h-40" required></textarea>
          {userData.description ? 
            <button type="submit" className="authButton" onClick={()=>{setActualComponentFunc("Result")}}>Next</button>
          :
          <button type="submit" className="authButton" onClick={()=>{setActualComponentFunc("Result")}}>Skip</button>
          }
        </form>
         <a href='/login' className="w-60 hover:underline pb-2">If you have an account, click here</a>
      </div>
    </Auth>
  )
}

export default DescriptionProfile;