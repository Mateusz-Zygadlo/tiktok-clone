import React from 'react';

interface Props{
  profileImageUrl: string,
  nick: string,
  description: string,
  date: string,
}

const Comment: React.FC<Props> = ({ profileImageUrl, nick, description, date }) => {
  return(
    <div className="flex my-2">
      <div className="w-14">
        <img src={profileImageUrl} className="w-12 h-12 rounded-full" alt="alt" />
      </div>
      <div className="ml-3 flex justify-between items-center w-full">
        <div>
          <h1 className="font-semibold text-xl break-words">{nick}</h1>
          <p className="text-md break-words">{description}</p>
          <p className="text-sm">{date}</p>
        </div>
      </div>
    </div>
  )
}

export default Comment;