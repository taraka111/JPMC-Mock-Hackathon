// backend/routes/adminRoutes.js

const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");

// Get all admins
router.get("/", async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (error) {
    res.status(500).json({ message: "Error fetching admins" });
  }
});

// Create a new admin
router.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newAdmin = new Admin({ name, email, password });
    await newAdmin.save();
    res.status(201).json(newAdmin);
  } catch (error) {
    res.status(400).json({ message: "Error creating admin" });
  }
});

module.exports = router;
