const mongoose = require('mongoose');

const infoSchema = new mongoose.Schema({
    title: { type: String,  },
    description: {type: String},
    descriptionTwo:{type: Number, },
    lvl:[{
        podstawowy:{type: String},
        sredniozawansowany:{type: String},
        zawansowany:{type: String}
    }],
    
  });

  module.exports = mongoose.model('Topic', infoSchema);