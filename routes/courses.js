const express = require("express");
const { getCourses, createCourse } = require("../controllers/courses");
const router = express.Router();

// /courses
router.route("/courses").get(getCourses).post(createCourse);

module.exports = router;
