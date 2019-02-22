var Usermodel = require('../../models/user')

var signUp = async(parent,args) => {
  var doc = new Usermodel({ email: '', password: '',todo: ['','']});
  doc.email = args.email;
  doc.password = args.password; 
  await doc.save();
  console.log(doc);
  console.log('run');
  return {
    password: args.password,
    email: args.email
  } 
}
  

module.exports = signUp
