import express from 'express';
import check from '../utils/checker.js';
import { Authenticate, ResponseHandler } from '../controllers/auth.controller.js';

const router = express.Router()

router.get('/google', check.clientSession,  Authenticate);
router.get('/redirect', ResponseHandler);


export default router;