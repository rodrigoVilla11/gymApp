const {Router} = require("express")
const getAllUsers = require("../controllers/users/Get_users.js")
const postUser = require("../controllers/users/Post_user.js")
const getUserById = require("../controllers/users/Get_UserById.js")
const deleteUserById = require("../controllers/users/Delete_UserById.js")
const putUserById = require("../controllers/users/Put_UserById.js")

const mainRouter = Router()

//USERS
mainRouter.get("/users", getAllUsers)
mainRouter.post("/users", postUser)
mainRouter.get("/users/:id", getUserById)
mainRouter.delete("/users/:id", deleteUserById)
mainRouter.put("/users/:id", putUserById)

module.exports = mainRouter;
