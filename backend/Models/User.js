const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ["admin", "anganwadi", "beneficiary"], required: true },
});

userSchema.methods.comparePassword = function(pass) {
  return bcrypt.compare(pass, this.passwordHash);
};

module.exports = mongoose.model("User", userSchema);
