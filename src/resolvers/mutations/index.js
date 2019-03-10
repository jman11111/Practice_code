var signUpfunc = require('./user.js').signUpex
var loginfunc = require('./user.js').loginex
var createTodofunc = require('./todo.js')

module.exports =  {
    signUp: signUpfunc,
    login: loginfunc,
    createTodo: createTodofunc
}

