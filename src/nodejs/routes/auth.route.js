import express from 'express';
import { Authenticate } from '../controllers/auth.controller.js';

const router = express.Router()

router.get('/google', Authenticate);
router.get('/redirect', function(req, res) {
    res.end();
})

export default router;