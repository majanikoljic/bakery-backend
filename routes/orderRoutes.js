import express from 'express';
const router = express.Router();

import {
  createOrder,
  getOrders,
  deleteOrder,
} from '../controllers/orderController.js';

// Create a new order
router.post('/', createOrder);

// Get all orders
router.get('/', getOrders);

// Delete an order
router.delete('/:id', deleteOrder);

export default router;
