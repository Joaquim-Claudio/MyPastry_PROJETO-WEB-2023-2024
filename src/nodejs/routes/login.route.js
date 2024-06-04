import express from 'express';

const router = express.Router()

router.get('/', function(req, res) {
    res.render('login');
})

export default router;