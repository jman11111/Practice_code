var Usermodel = require('../../models/user')

signUp = async(parent,args) => {
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
  

<<<<<<< HEAD
module.exports = signUp
=======
module.exports = {
        signUp
}
>>>>>>> 26c1f93d03ddbffa6d97f447b01fc39597325981
