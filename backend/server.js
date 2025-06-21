require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./Routes/userRoutes");
const awwRoutes = require("./Routes/awwRoutes");
const adminRoutes = require("./Routes/adminRoutes");
const sessionRoutes = require("./Routes/sessionRoutes");
const syncRoutes = require("./Routes/syncRoutes");
const userRoutes = require("./Routes/userRoutes");
const beneficiariesRoutes = require("./routes/beneficiaries");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use("/api/auth", userRoutes);
app.use("/api/anganwadi", awwRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/sessions", sessionRoutes);
app.use("/api/sync", syncRoutes);
app.use("/api/beneficiaries", beneficiariesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
