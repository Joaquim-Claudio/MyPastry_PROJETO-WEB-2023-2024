import { Router } from "express";
import { getByName } from "../controllers/client_controller.js";
const router = Router();

router.get('/', getByName);

export default router;