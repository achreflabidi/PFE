var mongoose = require ('mongoose');

var userSchema = new mongoose.Schema({
    Nom :   String ,
    prenom : String,
    Password: String,
    email: String    ,
    adress:String,
    tel:String,
   role:{},
   coach:{type:Schema.Type.ObjectId,ref:'coach'},
   admin:{type:Schema.Type.ObjectId,ref:'admin'},
   candidat:{type:Schema.Type.ObjectId,ref:'candidat'},

    avatar:Image
  });
 
  var user = mongoose.model('user', userSchema);
  module.exports = user;