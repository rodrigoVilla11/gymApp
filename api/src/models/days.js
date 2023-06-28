const {Schema, model} = require("mongoose")

const DaysSchema = new Schema({
  title: {
			type: String,
			required: true
	 }})

module.exports = model("Days", DaysSchema)
