const express = require("express");
const router = express.Router();
const { auth, isInstructor,isAdmin, isStudent } = require("../middlewares/auth");
const {
  createCourse,
  getAllCourses,
  getCourseDetails,
  getFullCourseDetails,
  editCourse,
  getInstructorCourses,
  deleteCourse,
} = require("../controllers/Course");
const { createSection, updateSection, deleteSection } = require("../controllers/Section");
const { createSubSection, updateSubSection, deleteSubSection } = require("../controllers/SubSection");
const { createCategory, showAllCategories, categoryPageDetails } = require("../controllers/Category");
const { createRating, getAverageRating, getAllRatingAndReviews } = require("../controllers/RatingAndReview");
const { updateCourseProgress } = require("../controllers/courseProgress");




router.post("/createCourse",auth,isInstructor,createCourse);
router.get("/getAllCourses", getAllCourses);
router.post("/getCourseDetails", getCourseDetails);
router.post("/getFullCourseDetails", auth, getFullCourseDetails);
router.post("/editCourse",editCourse)
router.delete("/deleteCourse", deleteCourse);


router.get("/getInstructorCourses", auth, isInstructor, getInstructorCourses);

router.post("/addSection",auth,isInstructor,createSection);
router.put("/updateSection",auth,isInstructor,updateSection);
router.delete("/deleteSection",auth,isInstructor,deleteSection);

router.post("/addSubSection",auth,isInstructor,createSubSection)
router.put("/updateSubSection",auth,isInstructor,updateSubSection)
router.delete("/deleteSubSection",auth,isInstructor,deleteSubSection);


// category routes only by admin
router.post("/createCategory",auth,isAdmin,createCategory);
router.get("/showAllCategories",showAllCategories)
router.post("/getCategoryPageDetails",categoryPageDetails);

router.post("/createRating",createRating);
router.get("/getAverageRating",getAverageRating)
router.get("/getReviews",getAllRatingAndReviews)

router.post("/updateCourseProgress", auth, isStudent, updateCourseProgress);


module.exports = router




