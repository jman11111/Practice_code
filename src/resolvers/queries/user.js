
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
<<<<<<< HEAD
}
=======
    }
>>>>>>> 26c1f93d03ddbffa6d97f447b01fc39597325981
