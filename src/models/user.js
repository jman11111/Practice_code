var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  email: String,
  password: String,
  tokens: [String]
});

var Usermodel = mongoose.model('Usermodel', userSchema);

module.exports = Usermodel;
