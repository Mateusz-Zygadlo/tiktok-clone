import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ImageSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  name: {
    type: 'string',
    required: true,
  }
})

const Image = mongoose.model<any>('Image', ImageSchema);
export default Image;