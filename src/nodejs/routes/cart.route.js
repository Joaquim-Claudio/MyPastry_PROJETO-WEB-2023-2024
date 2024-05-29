import express from 'express';
import { getCart, addToCart } from '../controllers/cart.controller.js';
const router = express.Router()

router.get('/', getCart);

router.post('/add-to-cart', addToCart);

export default router;