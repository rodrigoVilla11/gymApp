const Exercise = require("../../models/exercises.js")

const deleteExercise = async (req, res) => {
  const {id} = req.params
  try {
    if(!id){
      throw Error("Missing DATA")
    }
    const exercise = await Exercise.findByIdAndDelete(id)
    res.status(200).json({message: "Exercise deleted successfully", deletedExercise: exercise})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = deleteExercise
