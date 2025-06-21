const express = require("express");
const {
  getAllBeneficiaries,
  createBeneficiary,
  updateBeneficiary,
  deleteBeneficiary
} = require("../controllers/awwController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/beneficiaries", protect, getAllBeneficiaries);
router.post("/beneficiaries", protect, createBeneficiary);
router.put("/beneficiaries/:id", protect, updateBeneficiary);
router.patch("/beneficiaries/:id/delete", protect, deleteBeneficiary);

module.exports = router;
