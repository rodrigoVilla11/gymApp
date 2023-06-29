const Exercise = require("../../models/exercises.js")

const getAllExercises = async (req, res) => {
  const {name} = req.query
  try {
    const exercises = await Exercise.find()
     if (name) {
      const minusTitle = name.toLowerCase();
      exercises = exercises
        .where("title")
        .regex(new RegExp(minusTitle, "i"));
    }
    res.status(200).json(exercises)
  } catch (error) {
    res.status(404).json({error: error.message})
  }
}

module.exports = getAllExercises
