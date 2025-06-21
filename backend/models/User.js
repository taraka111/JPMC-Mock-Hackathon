const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  role: { type: String, enum: ["aww", "admin","mother"], required: true },
  otp: { type: String }, // for OTP login
  otpExpires: { type: Date }, // expire window
});

module.exports = mongoose.model("User", userSchema);
