import express from 'express';

const router = express.Router()

router.get('/', function(req, res) {
    res.render('register', {
        layout: 'layouts/login'
    });
});

export default router;