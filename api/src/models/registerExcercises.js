const {Schema, model} = require("mongoose")

const RegisterExcercisesSchema = new Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true 
  },
  exercise: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Exercises', 
    required: true 
  },
  date: { 
    type: Date, 
    default: Date.now },
  weight: Number,
  series: Number,
  repetitions: Number,)

module.exports = model("Excercises", RegisterExcercisesSchema )
