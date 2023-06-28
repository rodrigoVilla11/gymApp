const app = require("./src/app")
const mongoose = require("mongoose")
require("dotenv").config();

mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true, useUnifiedTopology: true });
console.log("DB connected successfully")

app.listen(process.env.PORT, () => {
	 console.log(`listening on port ${process.env.PORT}`)})

