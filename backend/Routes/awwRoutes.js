const express = require("express");
const router = express.Router();
const Aww = require("../models/Aww");

// 🔹 POST /api/anganwadi/register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, location, contact } = req.body;

    const existing = await Aww.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "AWW already registered" });
    }

    const newAww = new Aww({ name, email, password, location, contact });
    await newAww.save();

    res.status(201).json({ message: "AWW registered successfully", aww: newAww });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
