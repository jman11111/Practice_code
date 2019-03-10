var Usermodel = require('../../models/user')
var jwt = require('jsonwebtoken');

var signUp = async(parent,args) => {
  var doc = new Usermodel({ email: '', password: '',tokens: ['','']});
  doc.email = args.email;
  doc.password = args.password; 
  var webtoken = jwt.sign({
    ID: doc._id,
    email: doc.email
  },process.env.TOKENSECRET).toString();
  doc.tokens.push(webtoken);
  await doc.save();
  return {
    token: webtoken, 
    user: {
      uid: doc._id,
      email: doc.email
    }}; 
}

var login = async(parent,args) => {
  let user = await Usermodel.findOne({ email: args.email });
  if (args.password != user.password){
    throw new Error('password does not match');
  } 
  var webtoken = jwt.sign({
    ID: user._id,
    email: user.email
  },process.env.TOKENSECRET).toString();
  user.tokens.push(webtoken);
  await user.save();
  return {
    token: webtoken, 
    user: {
      uid: user._id,
      email: user.email
    }}; 
}
  

module.exports = {
  signUpex: signUp,
  loginex: login
} 