const {Schema, model} = require("mongoose")

const RegisterExcercisesSchema = new Schema({
  user: { 
    type: Schema.Types.ObjectId, 
    ref: 'User',
    required: true 
  },
  exercise: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'Exercises', 
    required: true 
  }],
  date: { 
    type: Date, 
    default: Date.now },
  day: String,
  weight: Number,
  series: Number,
  repetitions: Number,
  rest: String
})

module.exports = model("RegisterExercises", RegisterExcercisesSchema )
