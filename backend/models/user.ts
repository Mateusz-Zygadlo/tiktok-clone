import mongoose, {Document} from 'mongoose';

interface IUser extends Document {
  email: string,
  password: string,
  nick: string,
  firstName: string,
  lastName: string,
  description: string,
  following: any,
  followers: any,
  videos: any,
  allProfileLikes: number,
  videoLikes: any,
  comments: any,
  privateAccount: boolean,
  dateOfBirth: string,
  yearOfBirth: string,
  picture: string,
}

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  nick: {
    type: 'string',
    required: true,
    maxLength: 50,
    unique: true,
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
    unique: true,
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
  },
  picture: {
    type: "string",
    required: true,
  }
})

const User = mongoose.model('User', UserSchema);
export default User;