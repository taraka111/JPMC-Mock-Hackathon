const express = require("express");
const router = express.Router();
const Aww = require("../models/Aww");
const Admin = require("../models/Admin");
const Beneficiary = require("../models/Beneficiary");

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
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await Beneficiary.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const newUser = new Beneficiary({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: "Registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


router.get("/profile/:email", async (req, res) => {
  try {
    const user = await Beneficiary.findOne({ email: req.params.email });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Get Counselling Session History
router.get("/sessions/:email", async (req, res) => {
  try {
    const sessions = await Session.find({ beneficiaryEmail: req.params.email });
    res.json(sessions);
  } catch (err) {
    res.status(500).json({ message: "Error fetching sessions" });
  }
});

module.exports = router;
