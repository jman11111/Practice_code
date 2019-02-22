
    currUser = () => {
      return {
        id: "90",
        
      
      }
    }

    findUser = async(parent,args) => {
      let user = await Usermodel.findOne({ email: args.email });
      console.log(user.email)
      return user
    }
  

module.exports = {
        currUser,
        findUser
    }
