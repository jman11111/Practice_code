var Usermodel = require('../../models/user')

var signUp = async(parent,args) => {
  var doc = new Usermodel({ email: '', password: ''});
  doc.email = args.email;
  doc.password = args.password; 
  await doc.save();
  return doc; 
}
  

module.exports = signUp
