const express = require("express");
const admincontroller = require("../controllers/adminController");
const adminrouter = express.Router();

/* Admin login only (fixed) */
adminrouter.post("/adminlogin", admincontroller.adminLogin);

/* Worker CRUD */
adminrouter.post("/addworker", admincontroller.addWorker);
adminrouter.get("/viewworkers", admincontroller.viewWorkers);
adminrouter.put("/updateworker/:id", admincontroller.updateWorker);
adminrouter.delete("/deleteworker/:id", admincontroller.deleteWorker);

/* User CRUD */
adminrouter.post("/adduser", admincontroller.addUser);
adminrouter.get("/viewusers", admincontroller.viewUsers);
adminrouter.put("/updateuser/:id", admincontroller.updateUser);
adminrouter.delete("/deleteuser/:id", admincontroller.deleteUser);

/* Extra */
adminrouter.get("/userlocation/:id", admincontroller.viewUserLocation);
adminrouter.get("/downloadusers", admincontroller.downloadUserReport);

module.exports = adminrouter;
