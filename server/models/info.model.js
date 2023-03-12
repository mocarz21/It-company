const mongoose = require('mongoose');

const infoSchema = new mongoose.Schema({
    id: {type:String},
    title: { type: String,  },
    description: {type: String},
    descryptionTwo:{type: String },
    lvl: {
        type: Map,
        of: [{
          type: Map,
          of: [String]
        }]
    }
    
  });

  module.exports = mongoose.model('Topic', infoSchema);