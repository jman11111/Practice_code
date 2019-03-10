var todomodel = require('../../models/todo')

createTodo = async(parent,args) => {
    var todoNew = new todomodel({ title: '', body: '', authorID: ''});
    todoNew.title = args.title;
    todoNew.body = args.body; 
    todoNew.authorID = todoNew._id;
    await todoNew.save();
    return {
      title: todoNew.title,
      body: todoNew.body,
      _id: todoNew.authorID
    };
}

updateTodo = async(parent,args) => {
  todo_to_Update = await todomodel.findOne({ authorID: args._id }, function (err, doc){
    doc.title = args.title;
    doc.body = args.body;
    doc.save();
  });
  return {
    title: todo_to_Update.title,
    body: todo_to_Update.body,
    _id: todo_to_Update.authorID
  };
}
  
module.exports = {
  createfunc: createTodo,
  updatefunc: updateTodo
}