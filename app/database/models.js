// models/Todo.js

const mongoose = require('mongoose');
// Define the list of predefined categories
const predefinedCategories = [
  'Electronics',
  'Clothing',
  'Books',
  'Home & Kitchen',
  'Health & Beauty',
  'Sports & Outdoors',
  'Toys & Games',
  'Automotive',
  'Tools & Home Improvement',
  'Baby & Kids',
  'Office Supplies',
  'Pet Supplies',
  'Jewelry & Watches',
  'Food & Beverages',
  'Furniture',
  'Garden & Outdoor',
  'Music & Movies',
  'Art & Crafts',
  'Electronics Accessories',
  'Stationery',
  'Party Supplies',
  'Travel & Luggage',
  'Fitness & Exercise',
  'Video Games & Consoles',
  'Collectibles',
  'Musical Instruments',
  'Home Decor',
  'Personal Care',
  'Cleaning Supplies',
  'Industrial & Scientific'
];
let Inventory;

try {
  Inventory = mongoose.model('Inventory');
} catch {
  const InventorySchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    stocks: {
      type: Number,
      required:true
    },
    category: {
      type: String,
      required: true,
      enum: predefinedCategories // Ensures that category must be one of the predefined values
    }
  }, {
    timestamps: true, // Automatically create createdAt and updatedAt fields
  });

  Inventory = mongoose.model('Inventory', InventorySchema);
}

module.exports = Inventory;
