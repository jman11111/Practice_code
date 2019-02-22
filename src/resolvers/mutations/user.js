
    signUp = async(parent,args) => {
      var doc = new Usermodel({ email: '', password: '' });
      doc.email = args.email;
      doc.password = args.password;
      await doc.save();
      console.log(doc);
      return {
        email: doc.email,
        password: doc.password
      }
    }
  

module.exports = {
        signUp
}