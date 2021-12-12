import React from 'react';

interface Props{
  profileImageUrl: string,
  nick: string,
  description: string,
  date: string,
  commentLikes: number,
}

const Comment: React.FC<Props> = ({ profileImageUrl, nick, description, date, commentLikes }) => {
  return(
    <div className="flex my-1">
      <div className="w-14">
        <img src={profileImageUrl} className="w-12 h-12 rounded-full" alt="alt" />
      </div>
      <div className="ml-3 flex justify-between items-center w-full">
        <div>
          <h1 className="font-semibold text-xl w-80 break-words">{nick}</h1>
          <p className="text-md w-80 break-words">{description}</p>
          <p className="text-sm">{date}</p>
        </div>
        <div className="flex flex-col justify-center items-center mr-4">
          <span className="material-icons text-lg">favorite</span>
          <p>{commentLikes}</p>
        </div>
      </div>
    </div>
  )
}

export default Comment;