const Beneficiary = require("../models/Beneficiary");

exports.getAllBeneficiaries = async (req, res) => {
  try {
    const search = req.query.search || "";
    const regex = new RegExp(search, "i");

    const beneficiaries = await Beneficiary.find({
      awwId: req.user.id,
      isDeleted: false,
      $or: [
        { motherName: regex },
        { childName: regex }
      ]
    });

    res.json(beneficiaries);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch beneficiaries" });
  }
};

exports.createBeneficiary = async (req, res) => {
  try {
    const newBeneficiary = new Beneficiary({
      ...req.body,
      awwId: req.user.id
    });

    await newBeneficiary.save();
    res.status(201).json(newBeneficiary);
  } catch (err) {
    res.status(400).json({ error: "Failed to add beneficiary" });
  }
};

exports.updateBeneficiary = async (req, res) => {
  try {
    const updated = await Beneficiary.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: "Failed to update beneficiary" });
  }
};

exports.deleteBeneficiary = async (req, res) => {
  try {
    const deleted = await Beneficiary.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true },
      { new: true }
    );

    res.json({ message: "Deleted successfully", deleted });
  } catch (err) {
    res.status(400).json({ error: "Failed to delete beneficiary" });
  }
};
