import express from 'express';
import check from '../utils/checker.js';
import { Authenticate, Redirect, Logout } from '../controllers/auth.controller.js';

const router = express.Router()

router.post('/google', check.clientSession,  Authenticate);
router.get('/redirect', Redirect);
router.post('/logout', Logout);


export default router;