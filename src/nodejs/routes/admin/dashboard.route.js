import express from 'express';
import { getPage } from '../../controllers/admin/dashboard.controller.js';
const router = express.Router();

router.get('/', getPage);

export default router;