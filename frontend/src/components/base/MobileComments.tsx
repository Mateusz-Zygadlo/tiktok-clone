import React, { useState } from 'react';

interface Props{
  closeMobileComments: (props: boolean) => void,
  id?: any,
}

const MobileComments: React.FC<Props> = ({ closeMobileComments, id }) => {
  const [comment, setComment] = useState<string>('');
  const changeComment = (e: React.ChangeEvent<HTMLInputElement>) => setComment(e.target.value);
  const submitComment = () => {
    if(comment.length){
      console.log(id);
      return console.log(true);
    }
    return console.log(false);
  }

  return(
    <div className="w-screen overflow-y-auto h-screen fixed top-0 left-0 bg-white fixed p-3 bg-white z-50">
       <div className="p-2 flex items-center w-full justify-between fixed top-0 bg-white">
        <h1 className="text-3xl">Comments [123]</h1>
        <span className="material-icons text-4xl hover:text-red-300 transition-colors cursor-pointer pr-5" onClick={()=>{closeMobileComments(false)}}>close</span>
       </div>
       <div className="px-5 my-14">
          {/* <Comment
            profileImageUrl=""
            nick="This is a nick This is a nick This is a nick This is a nick This is a nickThis is a nick"
            date="12/3"
            description="This is a description this is a description"
          /> */}
       </div>
       <div className="h-14 w-full fixed bottom-0 flex items-center bg-white border-t-2 border-black">
          <input name="comment" onChange={changeComment} type="text" className="border-b-2 border-gray-200 w-full focus:outline-none" />
          <div className="px-16">
            <button onClick={submitComment}>Submit</button>
          </div>
       </div>
    </div>
  )
}

export default MobileComments;