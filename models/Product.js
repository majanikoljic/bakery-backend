import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String, // image URL or path
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      default: 'Baked Goods',
    },
    price: {
      type: Number,
      required: true,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
