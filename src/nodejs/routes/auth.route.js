import express from 'express';
import { Authenticate, ResponseHandler } from '../controllers/auth.controller.js';

const router = express.Router()

router.get('/google', Authenticate);
router.get('/redirect', ResponseHandler);


export default router;