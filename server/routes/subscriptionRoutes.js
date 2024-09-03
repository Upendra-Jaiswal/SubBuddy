const express = require("express");
const { subscriptions } = require("../controllers/subscriptionController");

const {
  sharesub,
  seemysharedsubs,
} = require("../controllers/sharedSubscriptionController");
const router = express.Router();

router.get("/subscriptions", subscriptions);
router.post("/sharesub", sharesub);
router.get("/seemysharedsubs", seemysharedsubs);

module.exports = router;
