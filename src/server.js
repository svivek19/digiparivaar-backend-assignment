require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");
const seedLessons = require("./utils/seedLessons");

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected");
    await seedLessons();
  })
  .catch((err) => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
