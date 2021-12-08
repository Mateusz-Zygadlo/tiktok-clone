import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ImageSchema = new Schema({
  nick: {
    type: 'string',
    required: true,
    maxLength: 50,
  },
  firstName: {
    type: 'string',
    required: true,
  },
  lastName: {
    type: 'string',
    required: true,
  },
  description: {
    type: 'string',
    required: true,
  },
  email: {
    type: 'string',
    required: true,
  },
  password: {
    type: 'string',
    required: true,
  },
  following: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  followers: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  videos: [{
    type: Schema.Types.ObjectId,
    ref: 'video'
  }],
  allProfileLikes: {
    type: 'number',
    required: true,
  },
  videoLikes: [{
    type: Schema.Types.ObjectId,
    ref: "video",
  }],
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'comment',
  }],
  privateAccount: {
    type: 'boolean',
    required: true,
  },
  dateOfBirth: {
    type: 'string',
    required: true,
  },
  yearOfBirth: {
    type: 'string',
    required: true,
  }
})

const Image = mongoose.model<any>('Image', ImageSchema);
export default Image;