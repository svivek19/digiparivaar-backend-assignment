const mongoose = require("mongoose");

const stepSchema = new mongoose.Schema({
  stepNumber: Number,
  title: String,
  instructionText: String,
  mediaUrl: String,
  type: {
    type: String,
    enum: ["text", "image", "audio", "simulation"],
    default: "text",
  },
});

const lessonSchema = new mongoose.Schema(
  {
    title: String,
    category: String,
    language: String,
    steps: [stepSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lesson", lessonSchema);
