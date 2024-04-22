const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ethereumSchema = new Schema({
  deposit: { 
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

const Ethereum = mongoose.model('Ethereum', ethereumSchema);

module.exports = Ethereum;
