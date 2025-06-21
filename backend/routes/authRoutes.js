const express = require("express");
const router = express.Router();

// ✅ Correct way to import controller functions
const { loginAWW, verifyOTP } = require("../controllers/authController");

// ✅ Correct route setup
router.post("/aww-login", loginAWW);
router.post("/verify-otp", verifyOTP);

module.exports = router;
