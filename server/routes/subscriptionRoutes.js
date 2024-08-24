const express = require("express");
const { subscriptions } = require("../controllers/subscriptionController");

const router = express.Router();

router.get("/subscriptions", subscriptions);

module.exports = router;
