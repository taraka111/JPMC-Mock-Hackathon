const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const workerrouter = require("./Routes/workerRoutes");
const clientrouter = require("./Routes/ClientRoutes");
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/worker", workerrouter);
app.use("/client",clientrouter);

// Routes
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.error("Mongo Error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

