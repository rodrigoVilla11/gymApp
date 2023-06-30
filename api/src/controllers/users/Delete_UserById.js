const User = require("../../models/users.js")

const deleteUser = async (req, res) => {
  const {id} = req.params
  try {
    if(!id){
      throw Error("Missing DATA")
    }
    const user = await User.findByIdAndRemove(id)
    if(!user){
      throw Error("This user doesn't exist")
    }
    res.status(200).json({message: "User deleted successfully"})
  } catch (error) {
    res.status(404).json({error: error.message})
  }
}

module.exports = deleteUser
