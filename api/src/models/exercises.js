const {Schema, model} = require("mongoose")

const ExcercisesSchema = new Schema({
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

module.exports = model("Excercises", ExcercisesSchema )
