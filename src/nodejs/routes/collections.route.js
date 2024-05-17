import { Router } from "express";
import { getPage } from "../controllers/collections.controller.js";

const router = Router();

router.get('/', getPage);

export default router;