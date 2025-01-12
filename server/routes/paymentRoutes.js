const express = require("express");
const { getPaymentDetails } = require("../controllers/paymentController");
const authenticateToken = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/getPaymentDetails", authenticateToken, getPaymentDetails);

module.exports = router;
