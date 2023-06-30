const Exercise = require("../../models/exercises.js")

const updateExercise = async (req, res) => {
  const {id} = req.params
  const {title, description, musclesInvolved} = req.body
  try {
    if(!id){
      throw Error("Missing DATA")
    }
    await Exercise.findByIdAndUpdate(id, {
      title: title,
      description: description,
      musclesInvolved: musclesInvolved
    })
    res.status(200).json({message: "Exercise updated successfully"})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = updateExercise
