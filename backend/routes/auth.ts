import express from 'express';
import { newAccount, login, logout } from '../controllers/userController';

const router = express.Router();

router.post('/new', newAccount);
router.post('/login', login);
router.get('/logout', logout);

export default router;