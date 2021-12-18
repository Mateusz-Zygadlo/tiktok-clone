import express from 'express';
import type { Request, Response } from 'express';
import User from '../models/user';
import Video from '../models/video';
import Comment from '../models/comment';
import async from 'async';
import { followPublicProfile, removeFollow, sendInvitation, cancelSendInvitation, acceptInvitation, removeInvitation } from '../controllers/userController';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  return res.json({
    success: "api works ['/']"
  })
})

router.post('/uniqueEmail', async (req: Request, res: Response) => {
  const { email } = req.body;
  const uniqueEmail = await User.findOne({email: email});

  if(uniqueEmail != null){
    return res.sendStatus(403);
  }
  return res.json({
    email,
  })
})
router.post('/uniqueNick', async (req: Request, res: Response) => {
  const { nick } = req.body;
  const uniqueNick = await User.findOne({ nick: nick });

  if(uniqueNick != null){
    return res.sendStatus(403);
  }
  return res.json({
    nick,
  })
})

router.get('/profile/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({nick: id})

  if(user == null){
    return res.sendStatus(403);
  }

  return res.json({
    user
  })
})
router.get('/profileById/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({_id: id})

  if(user == null){
    return res.sendStatus(403);
  }

  return res.json({ user })
})

router.get('/findProfiles/:id', async (req, res) => {
  const { id } = req.params;

  User.find({ _id: { $ne: id }}).exec((err, result) => {
    return res.json({
      result
    })
  })
})

router.get('/allVideos', (req, res) => {
  try{
    Video.find({whoViewVideo: 'public'}).exec((err, result) => {
      if(err){
        return res.sendStatus(403)
      }
      if(result){
        return res.json({ result })
      }
    })
  }catch(err){
    console.log(err);
  }
})

router.get('/video/:id', (req, res) => {
  const { id } = req.params;
  try{
    Video.findOne({_id: id}).exec((err, result) => {
      if(err){
        return res.sendStatus(403);
      }
      if(!result){
        return res.sendStatus(403);
      }

      return res
        .status(200)
        .json({ result });
    })
  }catch(err){
    console.log(err);
  }
})

router.post('/addComment/:id', (req, res) => {
  const { id } = req.params;
  const { nick, picture, _id } = req.body.user;
  const { comment } = req.body;
 
  try{
    const newComment = new Comment({
      nick,
      profileImageUrl: picture,
      description: comment,
      createdAt: Date.now(),
      video: id,
      owner: _id,
    }).save((err: any, result: any) => {
      if(err){
        return res.sendStatus(403);
      }
      async.parallel({
        addCommentToUser: (callback) => {
          User.updateOne({_id: result.owner}, { $push: { comments: result._id }}).exec(callback);
        },
        addCommentToVideo: (callback) => {
          Video.updateOne({_id: result.video}, { $push: { comments: result._id }}).exec(callback);
        }
      }, (err, result) => {
        if(err || !result){
          return res.sendStatus(403);
        }

        return res
          .status(200)
          .json({
            message: 'you create succesfully comment'
          })
      })
    })
  }catch(err){
    console.log('something went wrong')
  }
})

router.get('/comments/:id', (req, res) => {
  const { id } = req.params;
  
  try{
    Comment.find({video: id}).exec((err, result) => {
      if(err || !result){
        return res.sendStatus(403);
      }

      return res.json({
        result
      })
    })
  }catch(err){
    console.log(err);
  }
})

router.post('/sendInvitation/:id', sendInvitation);
router.post('/cancelSendInvitation/:id', cancelSendInvitation);
router.post('/acceptInvitation/:id', acceptInvitation);
router.post('/removeInvitation/:id', removeInvitation);

router.post('/followPublicProfile/:id', followPublicProfile);
router.post('/removeFollow/:id', removeFollow);

export default router;