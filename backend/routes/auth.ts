import express from 'express';
import { newAccount } from '../controllers/userController';

const router = express.Router();

router.post('/new', newAccount)

export default router;