import { Router } from "express";
import { getPage } from "../controllers/app.controller.js";

const router = Router();

router.get('/', getPage);

export default router;