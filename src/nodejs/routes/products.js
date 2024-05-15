import { Router } from "express";
import { getAll, getByCategory } from "../controllers/product_controller.js";

const router = Router();

router.get('/all', getAll);
router.get('/', getByCategory);

export default router;