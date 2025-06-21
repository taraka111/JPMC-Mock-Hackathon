const Worker = require("../Models/Worker");
const User   = require("../Models/Client");

/* ---------- Admin Login (Fixed Account) ---------- */
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email === "admin@gmail.com" && password === "admin") {
      return res.json({
        msg: "Login successful",
        email: "admin@gmail.com"
      });
    } else {
      return res.status(401).send("INVALID CREDENTIALS");
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
};

/* ---------- Worker CRUD ---------- */
const addWorker = async (req, res) => {
  try {
    const worker = new Worker(req.body);
    await worker.save();
    res.status(200).send("Worker Added Successfully");
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const viewWorkers = async (_, res) => {
  try {
    const workers = await Worker.find();
    res.json(workers);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const updateWorker = async (req, res) => {
  try {
    const worker = await Worker.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!worker) return res.status(404).send("WORKER NOT FOUND");
    res.json(worker);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const deleteWorker = async (req, res) => {
  try {
    const worker = await Worker.findByIdAndDelete(req.params.id);
    if (!worker) return res.status(404).send("WORKER NOT FOUND");
    res.send("Worker Deleted");
  } catch (e) {
    res.status(500).send(e.message);
  }
};

/* ---------- User CRUD ---------- */
const addUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(200).send("User Added Successfully");
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const viewUsers = async (_, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).send("USER NOT FOUND");
    res.json(user);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).send("USER NOT FOUND");
    res.send("User Deleted");
  } catch (e) {
    res.status(500).send(e.message);
  }
};

/* ---------- View User Location ---------- */
const viewUserLocation = async (req, res) => {
  try {
    const user = await User.findById(req.params.id, { location: 1, _id: 0 });
    if (!user) return res.status(404).send("USER NOT FOUND");
    res.json(user.location);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

/* ---------- Download Users Report ---------- */
const downloadUserReport = async (_, res) => {
  try {
    const users = await User.find();
    let csv = "Name,Phone,Stage,Lat,Lng\n";
    users.forEach(u => {
      const loc = u.location || {};
      csv += `${u.name || ""},${u.phone || ""},${u.pregnancyStage || ""},${loc.lat || ""},${loc.lng || ""}\n`;
    });
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=users_report.csv");
    res.send(csv);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

module.exports = {
  adminLogin,
  addWorker,
  viewWorkers,
  updateWorker,
  deleteWorker,
  addUser,
  viewUsers,
  updateUser,
  deleteUser,
  viewUserLocation,
  downloadUserReport
};
