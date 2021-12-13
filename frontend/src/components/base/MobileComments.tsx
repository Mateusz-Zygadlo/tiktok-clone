import React from 'react';
import Comment from './Comment';

interface Props{
  closeMobileComments: (props: boolean) => void;
}

const MobileComments: React.FC<Props> = ({ closeMobileComments }) => {
  return(
    <div className="w-screen overflow-y-auto h-screen fixed top-0 left-0 bg-white fixed z-20 p-3">
       <div className="p-2 flex items-center w-full justify-between fixed top-0 bg-white">
        <h1 className="text-3xl">Comments [123]</h1>
        <span className="material-icons text-4xl hover:text-red-300 transition-colors cursor-pointer pr-5" onClick={()=>{closeMobileComments(false)}}>close</span>
       </div>
       <div className="px-5 mt-14">
          <Comment
            profileImageUrl=""
            nick="This is a nick This is a nick This is a nick This is a nick This is a nickThis is a nick"
            date="12/3"
            description="This is a description this is a description"
            commentLikes={123} />
            <Comment
            profileImageUrl=""
            nick="This is a nick This is a nick This is a nick This is a nick This is a nickThis is a nick"
            date="12/3"
            description="This is a description this is a description"
            commentLikes={123} />
            <Comment
            profileImageUrl=""
            nick="This is a nick This is a nick This is a nick This is a nick This is a nickThis is a nick"
            date="12/3"
            description="This is a description this is a description"
            commentLikes={123} />
            <Comment
            profileImageUrl=""
            nick="This is a nick This is a nick This is a nick This is a nick This is a nickThis is a nick"
            date="12/3"
            description="This is a description this is a description"
            commentLikes={123} />
            <Comment
            profileImageUrl=""
            nick="This is a nick This is a nick This is a nick This is a nick This is a nickThis is a nick"
            date="12/3"
            description="This is a description this is a description"
            commentLikes={123} />
            <Comment
            profileImageUrl=""
            nick="This is a nick This is a nick This is a nick This is a nick This is a nickThis is a nick"
            date="12/3"
            description="This is a description this is a description"
            commentLikes={123} />
            <Comment
            profileImageUrl=""
            nick="This is a nick This is a nick This is a nick This is a nick This is a nickThis is a nick"
            date="12/3"
            description="This is a description this is a description"
            commentLikes={123} />
            <Comment
            profileImageUrl=""
            nick="This is a nick This is a nick This is a nick This is a nick This is a nickThis is a nick"
            date="12/3"
            description="This is a description this is a description"
            commentLikes={123} />
            <Comment
            profileImageUrl=""
            nick="This is a nick This is a nick This is a nick This is a nick This is a nickThis is a nick"
            date="12/3"
            description="This is a description this is a description"
            commentLikes={123} />
            <Comment
            profileImageUrl=""
            nick="This is a nick This is a nick This is a nick This is a nick This is a nickThis is a nick"
            date="12/3"
            description="This is a description this is a description"
            commentLikes={123} />
            <Comment
            profileImageUrl=""
            nick="This is a nick This is a nick This is a nick This is a nick This is a nickThis is a nick"
            date="12/3"
            description="This is a description this is a description"
            commentLikes={123} />
            <Comment
            profileImageUrl=""
            nick="This is a nick This is a nick This is a nick This is a nick This is a nickThis is a nick"
            date="12/3"
            description="This is a description this is a description"
            commentLikes={123} />
            <Comment
            profileImageUrl=""
            nick="This is a nick This is a nick This is a nick This is a nick This is a nickThis is a nick"
            date="12/3"
            description="This is a description this is a description"
            commentLikes={123} />
            <Comment
            profileImageUrl=""
            nick="This is a nick This is a nick This is a nick This is a nick This is a nickThis is a nick"
            date="12/3"
            description="This is a description this is a description"
            commentLikes={123} />
            <Comment
            profileImageUrl=""
            nick="This is a nick This is a nick This is a nick This is a nick This is a nickThis is a nick"
            date="12/3"
            description="This is a description this is a description"
            commentLikes={123} />
            <Comment
            profileImageUrl=""
            nick="This is a nick This is a nick This is a nick This is a nick This is a nickThis is a nick"
            date="12/3"
            description="This is a description this is a description"
            commentLikes={123} />
            <Comment
            profileImageUrl=""
            nick="This is a nick This is a nick This is a nick This is a nick This is a nickThis is a nick"
            date="12/3"
            description="This is a description this is a description"
            commentLikes={123} />
            <Comment
            profileImageUrl=""
            nick="This is a nick This is a nick This is a nick This is a nick This is a nickThis is a nick"
            date="12/3"
            description="This is a description this is a description"
            commentLikes={123} />
            <Comment
            profileImageUrl=""
            nick="This is a nick This is a nick This is a nick This is a nick This is a nickThis is a nick"
            date="12/3"
            description="This is a description this is a description"
            commentLikes={123} />
            <Comment
            profileImageUrl=""
            nick="This is a nick This is a nick This is a nick This is a nick This is a nickThis is a nick"
            date="12/3"
            description="This is a description this is a description"
            commentLikes={123} />
            <Comment
            profileImageUrl=""
            nick="This is a nick This is a nick This is a nick This is a nick This is a nickThis is a nick"
            date="12/3"
            description="This is a description this is a description"
            commentLikes={123} />
       </div>
    </div>
  )
}

export default MobileComments;