const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: false,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  image:{
    type: String,
    required: [true, 'A product must have an image'],
  },
  price: {
    type: Number,
    required: [true, 'A product must have a price'],
  },
  category: {
    type: String,
    required: [true, "A product must have a category"]
  },
  brand: {
    type: String, 
    required: [true]
  }
});

module.exports = mongoose.model('Product', productSchema);
