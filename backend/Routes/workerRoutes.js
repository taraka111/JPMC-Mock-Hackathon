const express = require("express");
const router = express.Router();


const { loginAWW, verifyOTP } = require("../Controllers/workerController");


router.post("/aww-login", loginAWW);
router.post("/verify-otp", verifyOTP);

module.exports = router;
