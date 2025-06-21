const mongoose = require("mongoose");

const awwSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  location: { type: String },
  contact: { type: String }
});

module.exports = mongoose.model("Aww", awwSchema);
