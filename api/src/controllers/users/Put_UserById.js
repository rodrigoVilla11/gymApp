const User = require("../../models/users.js")

const userUpdate = async (req, res) => {
  const {id} = req.params
  const {name, password, email} = req.body
  try {
    const user = await User.findById(id)
    if(!user){
      throw Error("This user doesn't exist")
    }

    const userUpdated = await User.findByIdAndUpdate(id, {
      name: name,
      password: password,
      email: email
    })
    res.status(200).json({message: "User updated", userUpdated: userUpdated})
  } catch (error) {
    res.status(404).json({error: error.message})
  }
}

module.exports = userUpdate
