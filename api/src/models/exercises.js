const {Schema, model} = require("mongoose")

const ExercisesSchema = new Schema({
  title: {
			type: String,
			required: true
	 },
  description: {
    type: String,
    required: true
  },
  musclesInvolved:{
    type: Array,
    required: true
  }})

module.exports = model("Exercises", ExercisesSchema )
