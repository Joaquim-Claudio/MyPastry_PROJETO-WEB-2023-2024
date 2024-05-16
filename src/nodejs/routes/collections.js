import { Router } from "express";
import { getPage } from "../controllers/collections_controller.js";

const router = Router();

router.get('/', getPage);

export default router;