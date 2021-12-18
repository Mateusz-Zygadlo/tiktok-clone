import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const VideoSchema = new Schema({
  nick: {
    type: 'string',
    required: true,
    unique: false,
  },
  firstName: {
    type: 'string',
    required: true,
  },
  lastName: {
    type: 'string',
    required: true,
  },
  isComments: {
    type: 'boolean',
    required: true,
  },
  description: {
    type: 'string',
    required: false,
  },
  video: {
    type: 'string',
    default: '',
  },
  whoViewVideo: {
    type: 'string',
    required: true,
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  profileImageUrl: {
    type: 'string',
    required: true,
  }
})

const User = mongoose.model('Video', VideoSchema);
export default User;