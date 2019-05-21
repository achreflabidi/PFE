var mongoose = require ('mongoose');

var coursSchema = new mongoose.Schema({
    titre :   String ,
    description : String,
    video: String,
    niveau_fv: String    ,
    contenu:String
   
  });
 
  var cours = mongoose.model('cours', coursSchema);
  module.exports = cours;