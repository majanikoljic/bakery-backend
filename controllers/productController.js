import Product from '../models/Product.js';

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500);
    throw new Error('Failed to fetch products');
  }
};

// @desc    Get product by ID
// @route   GET /api/products/:id
// @access  Public
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  } catch (err) {
    res.status(500);
    throw new Error('Error fetching product');
  }
};

// @desc    Create a new product
// @route   POST /api/products
// @access  Public (for now)
const createProduct = async (req, res) => {
  const { name, image, description, category, price, countInStock } = req.body;

  if (!name || !image || !description || !price) {
    res.status(400);
    throw new Error('Please fill in all required fields');
  }

  const newProduct = new Product({
    name,
    image,
    description,
    category,
    price,
    countInStock,
  });

  const createdProduct = await newProduct.save();
  res.status(201).json(createdProduct);
};

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Public (for now)
const deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: 'Product removed' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
};

export { getProducts, getProductById, createProduct, deleteProduct };
