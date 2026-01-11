const otpStore = new Map();

function generateOTP() {
  return "123456";
}

function saveOTP(phone, otp) {
  otpStore.set(phone, {
    otp,
    expiresAt: Date.now() + 2 * 60 * 1000,
  });
}

function verifyOTP(phone, otp) {
  const data = otpStore.get(phone);
  if (!data) return false;
  if (Date.now() > data.expiresAt) return false;
  return data.otp === otp;
}

module.exports = { generateOTP, saveOTP, verifyOTP };
