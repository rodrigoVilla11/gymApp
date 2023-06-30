const RegisterExercises = require("../../models/registerExercises.js")

const getRegisterExerciseById = async (req, res) => {
  const {userId} = req.params  
  try {
    if(!userId){
      throw Error("Missing DATA")
    }
    const exercises = await RegisterExercises.find({user: userId})
      .populate("user",{name: 1}).populate("exercise", {title:1, musclesInvolved: 1})
    if(!exercises){
      throw Error("wrong Id")
    }
    res.status(200).json(exercises)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = getRegisterExerciseById
