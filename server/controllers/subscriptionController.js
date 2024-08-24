const Subscription = require("../models/subscriptionModel");

const subscriptions = async (req, res) => {
  try {
    const subscription = await Subscription.find();
    return res.send(subscription);
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};

const sharesub = async (req, res) => {
  const { name, plan, startDate, endDate, user } = req.body; // Extract user ID from request

  try {
    const newSubscription = new Subscription({
      name,
      plan,
      startDate,
      endDate,
      user, // Associate the subscription with the user
    });
    await newSubscription.save();
    res.status(201).json(newSubscription);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  subscriptions,
  sharesub,
};
