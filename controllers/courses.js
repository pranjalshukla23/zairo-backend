const Course = require("../models/Course");

//get all courses from db
const getCourses = async (req, res) => {
  try {
    //get all courses
    const courses = await Course.find();

    console.log(courses);

    res.status(200).json(courses);
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: err.message,
    });
  }
};

//create a course in db
const createCourse = async (req, res) => {
  try {
    console.log("body", req.body);

    const { title, duration } = req.body;

    if (!title || !duration) {
      throw new Error("Please add title or duration");
    }

    //create a course
    const newCourse = await Course.create({
      title,
      duration,
    });

    res.status(201).json(newCourse);
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  getCourses,
  createCourse,
};
