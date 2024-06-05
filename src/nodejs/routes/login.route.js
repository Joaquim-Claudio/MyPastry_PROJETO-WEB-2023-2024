import express from 'express';
import check from '../utils/checker.js'

const router = express.Router()

router.get('/', check.clientSession, (req, res) => {

    res.render('login', {
        layout: 'layouts/login'
    });
})

export default router;