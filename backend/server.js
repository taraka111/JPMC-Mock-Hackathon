require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/userRoutes");
const awwRoutes = require("./routes/awwRoutes");
const adminRoutes = require("./routes/adminRoutes");
const sessionRoutes = require("./routes/sessionRoutes");
const syncRoutes = require("./routes/syncRoutes");

const app = express();
app.use(express.json());
app.use(cors());


const userRoutes = require("./routes/userRoutes");
app.use("/api/auth", userRoutes);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use("/api/auth", authRoutes);
app.use("/api/anganwadi", awwRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/sessions", sessionRoutes);
app.use("/api/sync", syncRoutes);
app.use("/api/beneficiaries", require("./routes/beneficiaries"));



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
