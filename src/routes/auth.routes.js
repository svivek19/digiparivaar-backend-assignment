const express = require("express");
const router = express.Router();
const otpLimiter = require("../middlewares/rateLimit.middleware");
const { requestOTP, verifyOTP } = require("../controllers/auth.controller");

router.post("/request-otp", otpLimiter, requestOTP);
router.post("/verify-otp", verifyOTP);

module.exports = router;
