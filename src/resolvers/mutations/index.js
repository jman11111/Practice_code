var signUpfunc = require('./user.js').signUpex
var loginfunc = require('./user.js').loginex
var createTodofunc = require('./todo.js').createfunc
var updateTodofunc = require('./todo.js').updatefunc

module.exports =  {
    signUp: signUpfunc,
    login: loginfunc,
    createTodo: createTodofunc,
    updateTodo: updateTodofunc
}

