const Progress = require("../models/Progress");

exports.updateProgress = async (req, res) => {
  const { lessonId, lastStepCompleted } = req.body;

  let progress = await Progress.findOne({
    userId: req.userId,
    lessonId,
  });

  const completed = false;

  if (progress) {
    progress.lastStepCompleted = lastStepCompleted;
    progress.completed = completed;
    await progress.save();
  } else {
    progress = await Progress.create({
      userId: req.userId,
      lessonId,
      lastStepCompleted,
      completed,
    });
  }

  res.json(progress);
};

exports.getProgress = async (req, res) => {
  const progress = await Progress.findOne({
    userId: req.userId,
    lessonId: req.params.lessonId,
  });

  res.json(progress);
};
