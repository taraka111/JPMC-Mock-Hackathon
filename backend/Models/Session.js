// backend/models/Session.js

const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  awwId: { type: mongoose.Schema.Types.ObjectId, ref: "Aww", required: true },
  beneficiaryId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, required: true },
  notes: { type: String },
});

module.exports = mongoose.model("Session", sessionSchema);
