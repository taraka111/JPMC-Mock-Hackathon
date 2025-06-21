const mongoose = require("mongoose");

const clientschema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  pregnancyStage: {
    type: String
  },
  location: {
    lat: Number,
    lng: Number,
    address: String
  },
  type: {
    type: String,
    default: "User"
  }
});

module.exports = mongoose.model("client", clientschema);
