//express
const express = require("express");

//cors
const cors = require("cors");

//course route
const courseRouter = require("./routes/courses");

//connect database function
const connectDB = require("./config/db");

//create express app
const app = express();

//dotenv
const dotenv = require("dotenv");

//load env vars
dotenv.config({
  path: "./config/config.env",
});

//connect to db
connectDB();

//use cors
app.use(cors());

//use body parser
app.use(express.json());

//use course router
app.use(courseRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log("listening on port 5000");
});
