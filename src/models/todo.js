var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
    title: String,
    body: String,
    authorID: String
  });
  
var Todomodel = mongoose.model('Todomodel', todoSchema);
  
module.exports = Todomodel;