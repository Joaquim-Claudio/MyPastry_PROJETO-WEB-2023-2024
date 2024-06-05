import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.render('app', {
        title: 'App | MyPastry',
        client: req.session.client
    });
});

export default router;