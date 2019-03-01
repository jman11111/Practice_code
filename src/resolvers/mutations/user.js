var Usermodel = require('../../models/user')
var jwt = require('jsonwebtoken');

var signUp = async(parent,args) => {
  var doc = new Usermodel({ email: '', password: '',tokens: ['','']});
  console.log(process.env.TOKENSECRET);
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
  var doc = new Usermodel({ email: '', password: '',tokens: ['','']});
  console.log(process.env.TOKENSECRET);
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
  

module.exports = signUp
