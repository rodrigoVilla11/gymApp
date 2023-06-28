const User = require("../../models/users.js")

const getUserById = async (req, res) => {
  const {id} = req.params
  try {
    if(!id){
      throw Error("Missing DATA")
    }
    const user = await User.findById(id)
    if(!user){
      throw Error("This user doesn't exist")
    }
    res.status(200).json(user)
  } catch (error) {
    res.status(404).json({error: error.message})
  }
}

module.exports = getUserById
