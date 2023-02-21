const mongoose = require('mongoose');

const formularzSchema = new mongoose.Schema({
    name: { type: String,  },
    companyName: {type: String},
    phone:{type: Number, },
    email:{type: String, },
    message:{type: String, },
  });

  module.exports = mongoose.model('ZapytaniaZlecenia', formularzSchema);