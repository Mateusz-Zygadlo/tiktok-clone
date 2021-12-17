import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const VideoSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  name: {
    type: 'string',
    required: true,
  },
  path: {
    type: 'string',
    required: true,
  }
})

const User = mongoose.model('VideoLink', VideoSchema);
export default User;