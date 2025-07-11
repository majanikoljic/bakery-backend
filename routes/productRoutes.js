import express from 'express';
const router = express.Router();

import {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
} from '../controllers/productController.js';

// Public routes
router.get('/', getProducts);
router.get('/:id', getProductById);

// Admin (or public for now)
router.post('/', createProduct);
router.delete('/:id', deleteProduct);

export default router;
