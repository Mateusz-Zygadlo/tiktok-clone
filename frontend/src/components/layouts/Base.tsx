import React from 'react';
import useDecodeUser from '../../hooks/useDecodeUser';
import Navbar from '../../components/Navbar';
import Leftbar from '../../components/Leftbar';

interface Props{
  children: any,
  removeLeftbar?: boolean,
}

const Base: React.FC<Props> = ({ children, removeLeftbar }) => {
  const user = useDecodeUser();

  return(
    <div className="md:px-24">
      <Navbar user={user} />
      <div className="flex">
        {!removeLeftbar && (
          <Leftbar user={user} />
        )}
        <div className="w-28.125 md:w-37.5 mx-auto mt-14 pl-14 h-64">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Base;