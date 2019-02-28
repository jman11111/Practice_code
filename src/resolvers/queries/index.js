findUserfunc = require('./user.js').findUser;
findTodofunc = require('./todo.js').todos;

module.exports = {
    todos: findTodofunc,
    findUser: findUserfunc
}
