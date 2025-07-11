import Order from '../models/Order.js';

// @desc    Create a new order
// @route   POST /api/orders
// @access  Public
const createOrder = async (req, res) => {
  const { orderItems, customerName, totalPrice } = req.body;

  if (!orderItems || orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
  }

  const order = new Order({
    orderItems,
    customerName,
    totalPrice,
  });

  const createdOrder = await order.save();
  res.status(201).json(createdOrder);
};

// @desc    Get all orders
// @route   GET /api/orders
// @access  Public (or Admin)
const getOrders = async (req, res) => {
  const orders = await Order.find({});
  res.json(orders);
};

// @desc    Delete an order
// @route   DELETE /api/orders/:id
// @access  Public (or Admin)
const deleteOrder = async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    await order.remove();
    res.json({ message: 'Order deleted' });
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
};

export { createOrder, getOrders, deleteOrder };
