import express from 'express';
import check from '../utils/checker.js';
import { Authenticate, ResponseHandler, AuthenticateNew, Redirect } from '../controllers/auth.controller.js';

const router = express.Router()

router.get('/google', check.clientSession,  Authenticate);
router.get('/redirect', Redirect);

router.post('/google/new', check.clientSession, AuthenticateNew)


export default router;