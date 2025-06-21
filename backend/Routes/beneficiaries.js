const express = require("express");
const router = express.Router();
const Beneficiary=require("../models/Beneficiary");

router.get("/", async (req, res) => {
  const list = await Beneficiary.find();
  res.json(list);
});

router.post("/", async (req, res) => {
  const newOne = new Beneficiary(req.body);
  await newOne.save();
  res.json({ message: "Beneficiary added" });
});

router.put("/:id", async (req, res) => {
  await Beneficiary.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Beneficiary updated" });
});

router.delete("/:id", async (req, res) => {
  await Beneficiary.findByIdAndDelete(req.params.id);
  res.json({ message: "Beneficiary deleted" });
});

module.exports = router;
