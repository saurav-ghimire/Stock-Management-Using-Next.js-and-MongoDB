// models/Todo.js

const mongoose = require('mongoose');

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
  }, {
    timestamps: true, // Automatically create createdAt and updatedAt fields
  });

  Inventory = mongoose.model('Inventory', InventorySchema);
}

module.exports = Inventory;
