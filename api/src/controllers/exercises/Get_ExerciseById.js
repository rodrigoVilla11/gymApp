const Exercise = require("../../models/exercises.js")

const getExerciseById = async (req, res) => {
  const {id} = req.params
  try {
    if(!id){
      throw Error("Missing DATA")
    }
    const exercise = await Exercise.findById(id)
    if(!exercise){
      throw Error(`There is no exercise matching the id ${id}`)
    }
    res.status(200).json(exercise)
  } catch (error) {
    res.status(404).json({error: error.message})
  }
}

module.exports = getExerciseById
