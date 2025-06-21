// backend/routes/adminRoutes.js
const express = require("express");
const router  = express.Router();

const Aww         = require("../Models/Aww");          // Anganwadi Worker model
const Beneficiary = require("../Models/Beneficiary");  // Beneficiary model

/* ─────────────────────────  Admin Login (hard-coded) ─────────────────────── */
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email === "admin@gmail.com" && password === "admin") {
    return res.status(200).json({ message: "Login successful", role: "admin" });
  } else {
    return res.status(401).json({ message: "Invalid credentials" });
  }
});
/* ─────────────────────────  AWW CRUD  ────────────────────────────────────── */
// Create
router.post("/awws", async (req, res) => {
  try {
    const aww = await Aww.create(req.body);
    res.status(201).json(aww);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Read all
router.get("/awws", async (_, res) => {
  try {
    const awws = await Aww.find();
    res.json(awws);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Read one
router.get("/awws/:id", async (req, res) => {
  try {
    const aww = await Aww.findById(req.params.id);
    if (!aww) return res.status(404).json({ message: "AWW not found" });
    res.json(aww);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update
router.put("/awws/:id", async (req, res) => {
  try {
    const updated = await Aww.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "AWW not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete
router.delete("/awws/:id", async (req, res) => {
  try {
    const removed = await Aww.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).json({ message: "AWW not found" });
    res.json({ message: "AWW deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/* ─────────────────────────  View Beneficiaries  ─────────────────────────── */
router.get("/beneficiaries", async (_, res) => {
  try {
    const list = await Beneficiary.find();
    res.json(list);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* ─────────────────────────  Dashboard Stats  ────────────────────────────── */
router.get("/stats", async (_, res) => {
  try {
    const [awwCount, beneficiaryCount] = await Promise.all([
      Aww.countDocuments(),
      Beneficiary.countDocuments(),
    ]);
    res.json({ totalAWWs: awwCount, totalBeneficiaries: beneficiaryCount });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
