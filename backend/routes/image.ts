import express from 'express';
import type { Request, Response } from 'express';
import { upload } from '../multer.config';
import Image from '../models/image';

const router = express.Router();

router.post('/new', upload, (req: any, res: any) => {  
  try{
    const newFile = new Image({
      name: req.file.filename,
    }).save((err: any) => {
      if(err){
        console.log('error schema')
      }
    })

    return res
      .status(200)
      .json({
        status: 'success'
      })
  }catch(err){
    return res.json({
      err,
    })
  }
})
router.get('/new', (req: Request, res: Response) => {
  return res.json({
    title: 'photo/new path'
  })
})

export default router;