const Lesson = require("../models/Lesson");

exports.createLesson = async (req, res) => {
  if (req.headers["x-admin-token"] !== process.env.ADMIN_TOKEN) {
    return res.status(403).json({ message: "Forbidden" });
  }

  const lesson = await Lesson.create(req.body);
  res.status(201).json(lesson);
};
