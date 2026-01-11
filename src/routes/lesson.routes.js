const express = require("express");
const router = express.Router();
const {
  getLessons,
  getLessonById,
} = require("../controllers/lesson.controller");

router.get("/", getLessons);
router.get("/:id", getLessonById);

module.exports = router;
