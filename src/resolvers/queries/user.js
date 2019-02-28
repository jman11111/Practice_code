var Usermodel = require('../../models/user');

findUser = async(parent,args) => {
  let user = await Usermodel.findOne({ email: args.email });
  console.log(user.email)
  return user
};
  
module.exports = {
  findUser
};
