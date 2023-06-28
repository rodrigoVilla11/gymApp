const User = require("../../models/users.js")

const postUser = async (req, res) =>{
  const {name, email, password} = req.body
  try {
    if(!name || !email || !password){
      throw Error("Missing DATA")
    }
    const newUser = await User.create({
      name, email, password
    })
    res.status(201).json({message: "User created successfully", newUser: newUser})
  } catch (error) {
    res.status(400).send({error: error.message})
  }
}

module.exports = postUser
