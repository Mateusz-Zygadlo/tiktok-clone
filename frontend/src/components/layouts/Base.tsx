import React from 'react';
import useDecodeUser from '../../hooks/useDecodeUser';
import Navbar from '../../components/Navbar';
import Leftbar from '../../components/Leftbar';

interface Props{
  children: any,
  removeLeftbar?: boolean,
  noPadding?: boolean,
}

const Base: React.FC<Props> = ({ children, removeLeftbar, noPadding }) => {
  const user = useDecodeUser();

  return(
    <>
      <Navbar user={user} />
      <div className="flex w-full h-full">
        {!removeLeftbar && (
          <Leftbar user={user} />
        )}
        <div className={`w-full flex justify-center ${noPadding ? 'md:ml-24 lg:ml-40' : null} mt-6`}>
          <div className="w-28.125 md:w-37.5 mx-auto mt-14 pl-14 h-64 xl:px-24">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Base;