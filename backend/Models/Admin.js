const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    default: "admin@gmail.com"
  },
  password: {
    type: String,
    required: true,
    default: "admin"
  },
  type: {
    type: String,
    default: "Admin"
  }
});

module.exports = mongoose.model("Admin", adminSchema);
