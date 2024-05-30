import express from 'express';
import { countByAge, getDailySales, countByGender } from '../../controllers/admin/statistics.controller.js';
const router = express.Router();

router.get('/users/ages', countByAge);
router.get('/orders/total', getDailySales);
router.get('/users/genders', countByGender);

export default router;