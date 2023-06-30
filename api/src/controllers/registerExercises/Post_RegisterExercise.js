const RegisterExercises = require("../../models/registerExercises.js")

const postRegisterExercise = async(req, res) => {
  const {userId, exerciseId, series, day, weight, repetitions, rest} = req.body;
  try {
    if(!userId || !exerciseId || !day || !series || !weight || !repetitions || !rest){
      throw Error("Missing DATA")
    }
    const exercise = await RegisterExercises.create({
      user: userId,
      exercise: exerciseId,
      day,
      series,
      weight,
      repetitions,
      rest
    })
    res.status(201).json(exercise)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

module.exports = postRegisterExercise
