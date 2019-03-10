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
  
module.exports = createTodo;