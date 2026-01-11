const Lesson = require("../models/Lesson");

exports.getLessons = async (req, res) => {
  const { category, language } = req.query;

  const filter = {};
  if (category) filter.category = category;
  if (language) filter.language = language;

  const lessons = await Lesson.find(filter);
  res.json(lessons);
};

exports.getLessonById = async (req, res) => {
  const lesson = await Lesson.findById(req.params.id);
  if (!lesson) {
    return res.status(404).json({ message: "Lesson not found" });
  }
  res.json(lesson);
};
