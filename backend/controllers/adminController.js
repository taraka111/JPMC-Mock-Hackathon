const Aww = require("../Models/Aww");
const Beneficiary = require("../Models/Beneficiary");

/* ───────────── Admin Login (Fixed) ───────────── */
exports.adminLogin = async (req, res) => {
  const { email, password } = req.body;
  if (email === "admin@gmail.com" && password === "admin") {
    return res.json({
      message: "Login Successful",
      adminId: 2025,
      email,
    });
  } else {
    return res.status(401).json({ message: "Invalid credentials" });
  }
};

/* ───────────── AWW CRUD ───────────── */
exports.addAWW = async (req, res) => {
  try {
    const aww = new Aww(req.body);
    await aww.save();
    res.status(201).json(aww);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAWWs = async (req, res) => {
  const list = await Aww.find();
  res.json(list);
};

exports.getAWW = async (req, res) => {
  const aww = await Aww.findById(req.params.id);
  if (!aww) return res.status(404).send("Not found");
  res.json(aww);
};

exports.updateAWW = async (req, res) => {
  const updated = await Aww.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).send("Not found");
  res.json(updated);
};

exports.deleteAWW = async (req, res) => {
  const deleted = await Aww.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).send("Not found");
  res.send("Deleted successfully");
};

/* ───────────── Beneficiary View ───────────── */
exports.getBeneficiaries = async (_, res) => {
  const beneficiaries = await Beneficiary.find();
  res.json(beneficiaries);
};

/* ───────────── Dashboard Stats ───────────── */
exports.getStats = async (_, res) => {
  const [awwCount, benCount] = await Promise.all([
    Aww.countDocuments(),
    Beneficiary.countDocuments()
  ]);
  res.json({ awwCount, beneficiaryCount: benCount });
};
