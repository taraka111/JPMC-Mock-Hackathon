// backend/routes/syncRoutes.js

const express = require("express");
const router = express.Router();
const Session = require("../models/Session");
const User = require("../models/User");

// 🔄 Example: Sync all sessions
router.get("/sessions", async (req, res) => {
  try {
    const sessions = await Session.find().populate("awwId beneficiaryId");
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ message: "Error syncing sessions", error });
  }
});

// 🔄 Example: Sync all users (beneficiaries)
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error syncing users", error });
  }
});

module.exports = router;
