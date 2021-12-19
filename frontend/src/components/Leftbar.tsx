import React, { useState, useEffect } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import SmallProfile from "./base/SmallProfile";
import axios from 'axios';

interface Props{
  user: any,
}

const Leftbar: React.FC<Props> = ({ user }) => {
  const [suggestedAccounts, setSuggestedAccounts] = useState<any>(null)
  const size = useWindowSize();
  const mobileWidth: number = 1050;

  const getSuggestedAccounts = async () => {
    return await axios.get('http://localhost:8000/suggestedAccounts')
      .then((res) => setSuggestedAccounts(res.data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getSuggestedAccounts();
  }, [])

  return(
    <div className={`${size.width > 1050 ? 'w-72' : 'w-16 flex flex-col items-center'} leftbarHeightCalc pb-5 overflow-y-auto overflow-x-hidden fixed top-14 pl-3 left-0 bg-white xl:ml-16`}>
      <div className="mt-3 pb-1">
        <a href='/'>
          <div className="flex items-center hover:bg-gray-100 p-2 cursor-pointer transition-colors">
            <span className="material-icons text-3xl">bed</span>
            {size.width > mobileWidth && (
              <p className="text-xl ml-3 font-semibold">For You</p>
            )}
          </div>
        </a>
      </div>
      <div className="border-b-2 border-black w-full my-2"></div>
      <div className={`${size.width > mobileWidth ? 'pl-2' : null}`}>
        {size.width > mobileWidth && (
          <p className="mb-2 mt-1 font-semibold">Suggested accounts</p>
        )}
        {suggestedAccounts && suggestedAccounts.result ? (
          <>
            {suggestedAccounts.result.map((profile: any, index: number) => (
              <SmallProfile
                key={index}
                profileLink={profile.picture}
                nick={profile.nick}
                firstName={profile.firstName}
                lastName={profile.lastName} />
            ))}
          </>
        ): <div>not found profiles</div>}
      </div>
    </div>
  )
}

export default Leftbar;