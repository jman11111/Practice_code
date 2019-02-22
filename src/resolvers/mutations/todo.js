var Usermodel = require('../../models/user')

addTodo = async(parent,args) => {
    let user = await Usermodel.findOne({ email: args.email });
    user.todo.push(args.todo);
    await user.save();
    console.log(user);
    return user.todo[todo.length - 1]
  }
  
  module.exports = addTodo;