import express from 'express';
import type { Request, Response } from 'express';


const router = express.Router();

router.post('/new', (req: Request, res: Response) => {
  console.log(req.body);

  return res.json({
    success: 'you send picture'
  })
})
router.get('/new', (req: Request, res: Response) => {
  return res.json({
    title: 'photo/new path'
  })
})

export default router;