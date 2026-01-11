const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { generateOTP, saveOTP, verifyOTP } = require("../utils/otpStore");

exports.requestOTP = async (req, res) => {
  const { phone } = req.body;

  if (!phone) {
    return res.status(400).json({ message: "Phone is required" });
  }

  const otp = generateOTP();
  saveOTP(phone, otp);

  return res.json({ otp });
};

exports.verifyOTP = async (req, res) => {
  const { phone, otp } = req.body;

  if (!verifyOTP(phone, otp)) {
    return res.status(401).json({ message: "Invalid or expired OTP" });
  }

  let user = await User.findOne({ phone });
  if (!user) {
    user = await User.create({ phone });
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.json({ token });
};
