import express from 'express';
import { countByAge, getDailySales } from '../../controllers/admin/statistics.controller.js';
const router = express.Router();

router.get('/users/ages', countByAge);
router.get('/orders/total', getDailySales);

export default router;