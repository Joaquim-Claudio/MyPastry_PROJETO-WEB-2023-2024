import express from 'express';
import { getPage, getTodaySales, getMediumPrice, getMediumOrderVolume, getOrdersTable, getCharts } from '../../controllers/admin/dashboard.controller.js';
const router = express.Router();

router.get('/', getPage);
router.get('/sales', getTodaySales);
router.get('/medium-price', getMediumPrice);
router.get('/medium-order-volume', getMediumOrderVolume);
router.get('/all-orders', getOrdersTable);
router.get('/charts', getCharts);

export default router;