import express from 'express';
import type { Request, Response } from 'express';
import { upload } from '../multer.config';
import Image from '../models/image';
import VideoLink from '../models/videoLink';
import Video from '../models/video';
import User from '../models/user';

const router = express.Router();

router.post('/new', upload.single('file'), (req: any, res: any) => {  
  try{
    const newFile = new Image({
      name: req.file.filename,
      path: `http://localhost:8000/${req.file.filename}`,
    }).save((err: any) => {
      if(err){
        console.log('error schema')
      }
    })

    return res
      .status(200)
      .json({
        imageName: `http://localhost:8000/${req.file.filename}`,
      })
  }catch(err){
    return res.json({
      err,
    })
  }
})

router.post('/schema', async (req: any, res: any) => {
  try{
    const { caption, whoViewVideo } = req.body.video;
    const { _id, nick, firstName, lastName } = req.body.user;
    const imageName = req.body.imageName;
    const isComments = req.body.video.comments;
    
    const newVideo = new Video({
      nick,
      firstName,
      lastName,
      description: caption,
      video: imageName,
      isComments,
      whoViewVideo,
      comments: [],
      likes: [],
      owner: _id,
    }).save((err: any) => {
      if(err){
        console.log(err);
      }
    })

    return res.json({
      imageName
    })
  }catch(err){
    console.log(err);
  }
});

router.post('/updateProfile', async (req: Request, res: Response) => {
  try{
    Video.findOne({video: req.body.videoName}).exec((err, result) => {
      if(!result){
        return res.sendStatus(403);
      }
      User.updateOne({_id: req.body._id}, { $push: { videos: result._id }}).exec((err, result) => {
        if(!result){
          return res.sendStatus(403);
        }

        return res.sendStatus(200);
      })
    })
  }catch(err){
    console.log(err);
  }
})

router.post('/upload', upload.single('file'), (req: any, res: any) => { 
  console.log(req.body);
  try{
    const newFile = new VideoLink({
      name: req.file.filename,
      path: `http://localhost:8000/${req.file.filename}`,
    }).save((err: any) => {
      if(err){
        console.log(err)
      }
    })

    return res
      .status(200)
      .json({
        imageName: `http://localhost:8000/${req.file.filename}`
      })
  }catch(err){
    return res.json({
      err,
    })
  }
})

export default router;