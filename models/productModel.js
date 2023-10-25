
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  basePrice: Number,
  inStock: Boolean,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
