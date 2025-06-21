const express = require("express");
const router = express.Router();
const Aww = require("../Models/Aww");
const Admin = require("../models/Admin");
const Beneficiary = require("../Models/Beneficiary");

// LOGIN
router.post("/login/:role", async (req, res) => {
  const { role } = req.params;
  const { email, password } = req.body;

  try {
    let user;
    if (role === "admin") {
      user = await Admin.findOne({ email: email.toLowerCase() });
    } else if (role === "anganwadi") {
      user = await Aww.findOne({ email: email.toLowerCase() });
    } else if (role === "beneficiary") {
      user = await Beneficiary.findOne({ email: email.toLowerCase() });
    } else {
      return res.status(400).json({ message: "Invalid role" });
    }

    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.password !== password)
      return res.status(401).json({ message: "Incorrect password" });

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
