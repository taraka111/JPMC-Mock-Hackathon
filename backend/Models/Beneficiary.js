const mongoose = require("mongoose");

const beneficiarySchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: String,
  phone: String,
  address: String,
  // Add more fields as per your app requirements
});

module.exports = mongoose.models.Beneficiary || mongoose.model("Beneficiary", beneficiarySchema);