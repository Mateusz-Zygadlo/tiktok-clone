import React from 'react';
import Comment from './Comment';

interface Props{
  closeMobileComments: (props: boolean) => void,
  comments?: any,
  changeComment: (e: any) => void,
  addComment: () => void,
  comment: string,
}

const MobileComments: React.FC<Props> = ({ closeMobileComments, comments, changeComment, addComment, comment }) => {
  return(
    <div className="w-screen overflow-y-auto h-screen fixed top-0 left-0 bg-white fixed p-3 bg-white z-50">
       <div className="p-2 flex items-center w-full justify-between fixed top-0 bg-white">
        <h1 className="text-3xl">Comments [123]</h1>
        <span className="material-icons text-4xl hover:text-red-300 transition-colors cursor-pointer pr-5" onClick={()=>{closeMobileComments(false)}}>close</span>
       </div>
       <div className="px-5 my-14">
        {comments && comments.result ? 
          <div className="p-2 overflow-y-scroll commentsDivHeight">
            {comments.result.map((comment: any, index: number) => (
              <Comment
                key={index}
                profileImageUrl={comment.profileImageUrl}
                nick={comment.nick}
                description={comment.description}
                date={comment.createdAt}/>
            ))}
          </div>
          : <div>Loading...</div>}
       </div>
       <div className="h-14 w-full fixed bottom-0 flex items-center bg-white border-t-2 border-black">
          <input name="comment" onChange={changeComment} value={comment} type="text" className="border-b-2 border-gray-200 w-full focus:outline-none" />
          <div className="px-16">
            <button onClick={addComment}>Submit</button>
          </div>
       </div>
    </div>
  )
}

export default MobileComments;