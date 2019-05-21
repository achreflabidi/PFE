var mongoose = require ('mongoose');

var testinscriptionSchema = new mongoose.Schema({
  
    question : String,
    reponse: String,
    description :   String 
   
  });
 
  var testinsc = mongoose.model('testinsc', testinscriptionSchema);
  module.exports = testinsc;