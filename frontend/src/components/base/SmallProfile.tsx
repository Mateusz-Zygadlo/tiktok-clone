import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';

interface Props{
  profileLink: string,
  nick: string,
  firstName: string,
  lastName: string,
}

const SmallProfile: React.FC<Props> = ({ profileLink, nick, firstName, lastName }) => {
  const size = useWindowSize();

  return(
    <a href={`/profile/${nick}`}>
      <div className="flex items-center cursor-pointer hover:bg-gray-100 transition-colors my-1">
        <img src={profileLink} alt="alt" className="w-10 h-10 rounded-full bg-black" />
        {size.width > 1050 && (
          <div className="ml-3 p-2">
            <p className="font-semibold text-md break-words w-52">{nick}</p>
            <p className="text-sm w-52 break-words">[{firstName} {lastName}]</p>
          </div>
        )}
      </div>
    </a>
  )
}

export default SmallProfile;