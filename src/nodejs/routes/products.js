import { Router } from "express";
import { getAll, getAllByCategory, getById } from "../controllers/product_controller.js";

const router = Router();

router.get('/all', getAll);
router.get('/', getAllByCategory);
router.get('/:id', getById);

export default router;