import { Router } from "express";
import { getPage } from "../controllers/app_controller.js";

const router = Router();

router.get('/', getPage);

export default router;