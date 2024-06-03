import express from 'express';
import { getActiveClients } from '../../controllers/admin/map.controller.js';

const router = express.Router();

router.get('/active-clients', getActiveClients);

export default router;