const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tetherSchema = new Schema({
  coin: { 
    type: String, 
    required: true 
  },

  symbol: { 
    type: String,
  },

  amount: { 
    type: Number,
    require: true,
  },

  address: { 
    type: String,
    required: true,
  },
  
}, {
  timestamps: true,
});

const Tether = mongoose.model('Tether', tetherSchema);

module.exports = Tether;