var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/projet', function(err) {
  if (err) { throw err; }
});