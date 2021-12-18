import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const CommentSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  nick: {
    type: 'string',
    required: true,
  },
  profileImageUrl: {
    type: 'string',
    required: true,
  },
  description: {
    type: 'string',
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  video: {
    type: Schema.Types.ObjectId,
    ref: 'Video',
  }
})

const Comment = mongoose.model<any>('Comment', CommentSchema);
export default Comment;