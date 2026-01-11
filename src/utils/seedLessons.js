const Lesson = require("../models/Lesson");

async function seedLessons() {
  const count = await Lesson.countDocuments();
  if (count > 0) return;

  await Lesson.insertMany([
    {
      title: "Using WhatsApp",
      category: "WhatsApp",
      language: "English",
      steps: [
        { stepNumber: 1, title: "Open App", instructionText: "Open WhatsApp" },
        { stepNumber: 2, title: "Chat", instructionText: "Open a chat" },
        { stepNumber: 3, title: "Type", instructionText: "Type message" },
        { stepNumber: 4, title: "Send", instructionText: "Press send" },
        { stepNumber: 5, title: "Reply", instructionText: "Read reply" },
      ],
    },
    {
      title: "UPI Payment",
      category: "UPI",
      language: "Hindi",
      steps: [
        { stepNumber: 1, title: "Open App", instructionText: "UPI app खोलें" },
        { stepNumber: 2, title: "Scan", instructionText: "QR स्कैन करें" },
        { stepNumber: 3, title: "Amount", instructionText: "राशि डालें" },
        { stepNumber: 4, title: "PIN", instructionText: "PIN डालें" },
        { stepNumber: 5, title: "Done", instructionText: "भुगतान पूरा" },
      ],
    },
  ]);

  console.log("Lessons seeded");
}

module.exports = seedLessons;
