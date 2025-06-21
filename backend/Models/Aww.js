const mongoose = require("mongoose");

const awwSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  location: { type: String },
  contact: { type: String }
});

// ✅ Prevent overwrite error if model already exists
module.exports = mongoose.models.Aww || mongoose.model("Aww", awwSchema);
