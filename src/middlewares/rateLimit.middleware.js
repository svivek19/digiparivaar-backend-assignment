const rateLimit = require("express-rate-limit");

const otpLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: "Too many OTP requests. Try again later.",
});

module.exports = otpLimiter;
