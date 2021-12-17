import mongoose from 'mongoose';

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
    required: false,
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
    ref: 'video',
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
    default: "http://localhost:8000/public-1639159844793-149-1495532_gwent-tracker-home-good-profile-picture-for-discord.png",
  },
  invitations: [{
    type: Schema.Types.ObjectId,
    ref: 'User' 
  }],
  yourInvitations: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
})

const User = mongoose.model('User', UserSchema);
export default User;