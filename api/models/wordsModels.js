var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var WordSchema = new Schema({
  word: {
    type: String,
    unique : true, 
    required : true
    
  },
   meaning: {
    type: String,
    required : true
    
  },
  word_date: {
    type: Date,
    default: Date.now,
    unique : true, 
    required : true
  },
  
});

module.exports = mongoose.model('Words', WordSchema);