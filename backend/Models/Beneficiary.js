const mongoose = require("mongoose");

const beneficiarySchema = new mongoose.Schema({
  motherName: String,
  childName: String,
  childAge: String,
  weight: Number,
  location: String,
  awwId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model("Beneficiary", beneficiarySchema);
