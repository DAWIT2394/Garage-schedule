const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
  full_name: {
     type: String, 
     required: true 
    },
  car_mantance: { 
    type: String, 
    required: true },
  phone_number: {
     type: Number, 
     required: true },

  plate_number: {
     type: Number, 
     required: true
     },
  date: {
     type: Date,
  
    },
    date_end: {
      type: Date,
   
     },
  description: { 
    type: String, 
    required: true
   },
   car_model: { 
    type: String, 
    required: true
   },
});

module.exports = mongoose.model('Car', CarSchema);
