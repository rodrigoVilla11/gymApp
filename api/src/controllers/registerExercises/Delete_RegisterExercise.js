const RegisterExercises = require("../../models/registerExercises.js")

const deleteRegisterExercise = async (req, res) => {
  const {registerExercisesId} = req.params;
  try {
    if(!registerExercisesId){
      throw Error("Missing DATA")
    }
    const deletedRegisterExercise = await RegisterExercises.findByIdAndDelete(registerExercisesId)
    res.status(200).json({message: "Exercise deleted Successfully"})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = deleteRegisterExercise
