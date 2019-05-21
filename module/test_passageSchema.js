var mongoose = require ('mongoose');

var testPassageSchema = new mongoose.Schema({
    niveau_fp :   String ,
    question : String,
    reponse: String
   
  });
 
  var testp = mongoose.model('testp', testPassageSchema);
  module.exports = testp;