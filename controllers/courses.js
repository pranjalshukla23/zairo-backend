const Course = require("../models/Course");

//get all courses from db
const getCourses = async (req, res) => {
  try {
    //get all courses
    const courses = await Course.find();

    const allCourses = courses.filter((course) => {
      //check if date is not a weekend
      return course.start.getDay() !== 6 && course.start.getDay() !== 0;
    });

    res.status(200).json(allCourses);
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
    const { title, duration, start, end } = req.body;

    const today = new Date();
    let tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    if (!title || !duration) {
      throw new Error("Please add title or duration");
    }

    //create a course
    const newCourse = await Course.create({
      title,
      duration,
      createdAt: today,
      start: start ? start : tomorrow,
      end: end ? end : tomorrow,
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
