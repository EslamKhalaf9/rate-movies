import express from 'express';
import { postLogin, postregister } from '../controllers/userControllers.js';

const router = express.Router();

router.post('/login', postLogin);

router.post('/register', postregister);

export default router;
