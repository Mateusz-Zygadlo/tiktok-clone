import express from 'express';
import type { Request, Response } from 'express';
import User from '../models/user';

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

export default router;