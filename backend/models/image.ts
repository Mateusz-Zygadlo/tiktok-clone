import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ImageSchema = new Schema({
  
})

const Image = mongoose.model<any>('Image', ImageSchema);
export default Image;