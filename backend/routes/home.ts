import express from 'express';
import type { Request, Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  return res.json({
    success: "api works ['/']"
  })
})
router.post('/isExist', (req: Request, res: Response) => {
  const { email, nick } = req.body;

  if(nick == '123'){
    return res.sendStatus(403);
  }

  return res.json({
    email,
    nick,
  })
})

export default router;