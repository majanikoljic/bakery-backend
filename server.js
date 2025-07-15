import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON body
app.use(morgan('dev'));  // Log HTTP requests

// Routes
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/users', userRoutes);

// Error Middleware
app.use(notFound);
app.use(errorHandler);

// Server Listener
const PORT = process.env.PORT || 5001;
console.log('PORT env var is:', process.env.PORT);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
