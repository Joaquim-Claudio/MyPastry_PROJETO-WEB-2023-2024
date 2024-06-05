import express from 'express';
import check from '../utils/checker.js';
import { Authenticate, ResponseHandler, AuthenticateNew } from '../controllers/auth.controller.js';

const router = express.Router()

router.get('/google', check.clientSession,  Authenticate);
router.get('/redirect', ResponseHandler);

router.get('/google/new', check.clientSession, AuthenticateNew)


export default router;