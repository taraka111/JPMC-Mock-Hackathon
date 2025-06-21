const express = require("express");
const clientcontroller = require("../Controllers/clientController");

const router = express.Router();

// Route for login
router.post("/login", clientcontroller.clientLogin);

// Route to view profile
router.get("/profile/:id", clientcontroller.viewProfile);

module.exports = router;
