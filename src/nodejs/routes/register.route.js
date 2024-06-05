import express from 'express';
import check from '../utils/checker.js';

const router = express.Router()

router.get('/', check.clientSession, function(req, res) {
    
    res.render('register', {
        layout: 'layouts/login'
    });
});

export default router;