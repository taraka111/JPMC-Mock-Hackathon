// backend/routes/sessionRoutes.js

const express = require("express");
const router = express.Router();
const Session = require("../models/Session");

// 🔹 Create a new session
router.post("/", async (req, res) => {
  try {
    const { awwId, beneficiaryId, date, notes } = req.body;

    const newSession = new Session({
      awwId,
      beneficiaryId,
      date,
      notes,
    });

    await newSession.save();
    res.status(201).json(newSession);
  } catch (error) {
    res.status(400).json({ message: "Error creating session", error });
  }
});

// 🔹 Get all sessions
router.get("/", async (req, res) => {
  try {
    const sessions = await Session.find().populate("awwId beneficiaryId");
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching sessions", error });
  }
});

module.exports = router;
