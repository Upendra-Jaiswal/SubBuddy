const express = require("express");
const {
  subscriptions,
  sharesub,
} = require("../controllers/subscriptionController");

const router = express.Router();

router.get("/subscriptions", subscriptions);
router.post("/sharesub", sharesub);

module.exports = router;
