const express = require("express");
const {
  subscriptions,
  getSubscriptionById,
  subscribeToService,
  getUserSubscriptions,
  shareSubscription,
  getSharedSubscriptions,
} = require("../controllers/subscriptionController");

const {
  sharesub,
  seemysharedsubs,
} = require("../controllers/sharedSubscriptionController");

const authenticateToken = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/subscriptions", subscriptions);
router.post("/sharesub", sharesub);
router.get("/seemysharedsubs", seemysharedsubs);

// // View all subscriptions
// router.get('/subscriptions', subscriptionController.getAllSubscriptions);

// View a specific subscription by ID
router.get("/subscriptions/:id", getSubscriptionById);

// Subscribe to a service
router.post("/subscribe", subscribeToService);

// View user’s subscribed services
router.get("/my-subscriptions", getUserSubscriptions);

// Share a subscription
router.post("/sharesubscription", authenticateToken, shareSubscription);

router.get(
  "/getsharedsubscriptions",
  authenticateToken,
  getSharedSubscriptions
);

router.get("/");

module.exports = router;
