const sharedSubscription = require("../models/sharedSubscriptionModel");

const sharesub = async (req, res) => {
  const { serviceName, plans, startDate, endDate } = req.body; // Extract user ID from request
  //const userId = req.user.id;

  try {
    const newSubscription = new sharedSubscription({
      serviceName,
      plans,
      startDate,
      endDate,
    });
    await newSubscription.save();
    res.status(201).json(newSubscription);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const seemysharedsubs = async (req, res) => {
  try {
    const subscription = await sharedSubscription.find();
    return res.send(subscription);
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};

module.exports = {
  sharesub,
  seemysharedsubs,
};
