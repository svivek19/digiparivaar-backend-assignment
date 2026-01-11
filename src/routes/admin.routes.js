const express = require("express");
const router = express.Router();
const { createLesson } = require("../controllers/admin.controller");

router.post("/lessons", createLesson);

module.exports = router;
