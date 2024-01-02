const mongoose = require('mongoose');

// Define the Tour schema
const tourSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true
  },
  packageName: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  tourist: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  }
}, {timestamps: true});

// Create the Tour model
const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;
