const {Schema, model} = require("mongoose")

const UserSchema = new Schema({
	 name: {
			type: String,
			required: true
	 },
	 admin: { 
			type: Boolean,
			default: true
	 }
})

module.exports = model("User", UserSchema)
