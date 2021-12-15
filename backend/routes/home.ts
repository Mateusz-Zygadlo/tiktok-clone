import express from 'express';
import type { Request, Response } from 'express';
import User from '../models/user';
import { followPublicProfile, removeFollow, sendInvitation, cancelSendInvitation, acceptInvitation } from '../controllers/userController';

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

router.post('/sendInvitation/:id', sendInvitation);
router.post('/cancelSendInvitation/:id', cancelSendInvitation);
router.post('/acceptInvitation/:id', acceptInvitation);

router.post('/followPublicProfile/:id', followPublicProfile);
router.post('/removeFollow/:id', removeFollow);

export default router;