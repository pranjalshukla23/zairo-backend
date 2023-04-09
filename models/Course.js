const mongoose = require("mongoose");

//create a schema
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a course title"],
  },
  duration: {
    type: Number,
    required: [true, "Please add a duration"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  start: {
    type: Date,
    default: Date.now(),
  },
  end: {
    type: Date,
    default: Date.now(),
  },
});

//create a model from schema
module.exports = mongoose.model("Course", courseSchema);
