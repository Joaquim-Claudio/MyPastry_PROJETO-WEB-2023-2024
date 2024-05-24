import express from 'express';
import { getPage, getTodaySales, getCharts } from '../../controllers/admin/dashboard.controller.js';
const router = express.Router();

router.get('/', getPage);
router.get('/sales', getTodaySales);
router.get('/charts', getCharts);

export default router;