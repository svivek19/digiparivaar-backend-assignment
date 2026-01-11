const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth.middleware");
const {
  updateProgress,
  getProgress,
} = require("../controllers/progress.controller");

router.post("/", auth, updateProgress);
router.get("/:lessonId", auth, getProgress);

module.exports = router;
