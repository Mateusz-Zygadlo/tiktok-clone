import express from 'express';
import type { Request, Response } from 'express';
import { upload } from '../multer.config';
import Image from '../models/image';

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

export default router;