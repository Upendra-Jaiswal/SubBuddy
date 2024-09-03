const Subscription = require("../models/subscriptionModel");

const subscriptions = async (req, res) => {
  try {
    const subscription = await Subscription.find();
    return res.send(subscription);
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};



module.exports = {
  subscriptions,
  
};
