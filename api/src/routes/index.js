const {Router} = require("express")
const Users = require('../models/users.js')

const mainRouter = Router()

mainRouter.get("/", async (req, res) => {
	 try{
			console.log("listando...")
			const users = await Users.find();
			return res.send(users)
	 }catch(error){
			res.send(error.message)
	 }
})

mainRouter.get("/create", async (req, res) => {
	 try{
	 console.log("creando...")
	 await Users.create({name: "Juan"})
	 res.send("created")
	 }catch(error){
	 res.send(error.message)
	 }
})

module.exports = mainRouter;
