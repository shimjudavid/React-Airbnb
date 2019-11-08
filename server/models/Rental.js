const mongoose = require('mongoose');
const RentalSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    max: [128, 'Too long title, maximum 128 chars are allowed']
  },
  city: {
    type: String,
    required: true,
    lowercase: true
  },
  street: {
    type: String,
    required: true,
    min: [4, 'Too short, minimum 4 characters needed']
  },
  category: {
    type: String,
    required: true,
    lowercase: true
  },
  image: {
    type: String,
    required: true
  },
  bedrooms: Number,
  shared: Boolean,
  description: {
    type: String,
    required: true
  },
  dailyRate: Number,
  createdAt: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Rental', RentalSchema);