const {Schema, model} = require("mongoose")

const UserSchema = new Schema({
  name: {
			type: String,
			required: true
	 },
  email:{
    type: String,
    required: true,
    unique: true,
  },
  password:{
   type: String
  },
  admin: { 
			type: Boolean,
			default: true
	 },
  enable: {
    type: Boolean,
    default: true
  }
})

module.exports = model("User", UserSchema)
