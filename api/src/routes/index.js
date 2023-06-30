const {Router} = require("express")
const mainRouter = Router()

//USERS
const getAllUsers = require("../controllers/users/Get_users.js")
const postUser = require("../controllers/users/Post_user.js")
const getUserById = require("../controllers/users/Get_UserById.js")
const deleteUserById = require("../controllers/users/Delete_UserById.js")
const putUserById = require("../controllers/users/Put_UserById.js")
mainRouter.get("/users", getAllUsers)
mainRouter.post("/users", postUser)
mainRouter.get("/users/:id", getUserById)
mainRouter.delete("/users/:id", deleteUserById)
mainRouter.put("/users/:id", putUserById)

//EXERCISES
const postExercises = require("../controllers/exercises/Post_Exercise.js")
const getAllExercises = require("../controllers/exercises/Get_Exercises.js")
const getExerciseById = require("../controllers/exercises/Get_ExerciseById.js")
const deleteExerciseById = require("../controllers/exercises/Delete_Exercise.js")
const updateExercise = require("../controllers/exercises/Put_ExerciseById.js")
mainRouter.post("/exercises", postExercises)
mainRouter.get("/exercises", getAllExercises)
mainRouter.get("/exercises/:id", getExerciseById)
mainRouter.delete("/exercises/:id", deleteExerciseById)
mainRouter.put("/exercises/:id", updateExercise)

//REGISTER EXERCISES
const postRegisterExercise = require("../controllers/registerExercises/Post_RegisterExercise.js")
const getRegisterExerciseById = require("../controllers/registerExercises/Get_RegisterExercisesByUserId.js")
const deleteRegisterExercise = require("../controllers/registerExercises/Delete_RegisterExercise.js")
mainRouter.post("/myExercises", postRegisterExercise)
mainRouter.get("/myExercises/:userId", getRegisterExerciseById)
mainRouter.delete("/myExercises/:registerExercisesId", deleteRegisterExercise)



module.exports = mainRouter;


