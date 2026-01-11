const express = require("express");
const authRoutes = require("./routes/auth.routes");
const lessonRoutes = require("./routes/lesson.routes");
const progressRoutes = require("./routes/progress.routes");

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/lessons", lessonRoutes);
app.use("/progress", progressRoutes);

app.get("/", (req, res) => {
  res.json({ message: "DigiParivaar Backend Running" });
});

module.exports = app;
