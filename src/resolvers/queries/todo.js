var Todomodel = require('../../models/todo');

todos = async(parent,args) => {
  var All_Todos = Todomodel.find();
  return All_Todos;
};
  
module.exports = {
  todos
};