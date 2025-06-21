// backend/models/Admin.js

const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // You can add password hashing later
});

module.exports = mongoose.model("Admin", adminSchema);
