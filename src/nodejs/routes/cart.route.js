import express from 'express';
import { getCart, addItemToCart, updateCartItem, deleteCartItem, getNumItems, confirmOrder } from '../controllers/cart.controller.js';
const router = express.Router()

router.get('/', getCart);
router.get('/get-num-items', getNumItems);
router.get('/confirm-order', confirmOrder)

router.post('/add-to-cart', addItemToCart);
router.post('/update-cart-item', updateCartItem);
router.post('/delete-cart-item', deleteCartItem);

export default router;