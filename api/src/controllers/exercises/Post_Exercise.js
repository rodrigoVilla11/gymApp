const Exercise = require("../../models/exercises.js")

const postExercise = async (req, res) => {
  const {title, description, musclesInvolved} = req.body
  try {
    if(!title || !description || !musclesInvolved){
      throw Error("Missing DATA")
    }
    const newExercise = await Exercise.create({
      title,
      description,
      musclesInvolved
    })
    res.status(200).json({message: "Exercise created successfully", newExercise: newExercise})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = postExercise

