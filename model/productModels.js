const mongoose = require('mongoose');

// Define the product schema
const productSchema = new mongoose.Schema({
  // Implement the product schema fields here as
  // productName as String and price as Number
  name: { type: String, },
  price: {type: Number}
});

// Create and export the Product model
module.exports= mongoose.model( 'Product', productSchema);
