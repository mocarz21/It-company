const mongoose = require('mongoose');

const infoSchema = new mongoose.Schema({
    _id: {type:Object},
    title: { type: String,  },
    description: {type: String},
    descryptionTwo:{type: String },
    lvl:[{
        podstawowy:{type: Object},
        sredniozawansowany:{type: Object},
        zawansowany:{type: Object}
        }]
    
  });

  module.exports = mongoose.model('Topic', infoSchema);