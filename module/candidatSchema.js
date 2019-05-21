var mongoose = require ('mongoose');

var candidatSchema = new mongoose.Schema({
    Niveau :   String ,
 
  });
 
  var candidat = mongoose.model('candidat', candidatSchema);
  module.exports = candidat;