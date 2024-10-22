const Subscription = require("../models/subscriptionModel");
const User = require("../models/userModel");

const subscriptions = async (req, res) => {
  try {
    const subscription = await Subscription.find();
    return res.send(subscription);
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};

//Users can click on a specific subscription to view a list of users who are sharing it.
const getSubscriptionById = async (req, res) => {
  try {
    const subscription = await Subscription.findById(req.params.id).populate(
      "usersSharing",
      "name"
    );
    if (!subscription) {
      return res.status(404).json({ message: "Subscription not found" });
    }
    res.status(200).json(subscription);
  } catch (error) {
    res.status(500).json({ message: "Error fetching subscription" });
  }
};

//After a user pays for a subscription, their account will be updated to
//show that they are subscribed to the service.
//post req

const subscribeToService = async (req, res) => {
  const { subscriptionId } = req.body;

  const userId = req.user._id;

  try {
    const subscription = await Subscription.findById(subscriptionId);
    if (!subscription) {
      return res.status(404).json({ message: "Subscription not found" });
    }

    const user = await User.findById(userId);
    user.subscribedServices.push(subscriptionId);
    await user.save();

    res.status(200).json({ message: "Subscribed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error subscribing to service" });
  }

  //code start from here
  // const { serviceName, plans, startDate, endDate } = req.body; // Extract user ID from request
  // //const userId = req.user.id;

  // try {
  //   const newSubscription = new sharedSubscription({
  //     serviceName,
  //     plans,
  //     startDate,
  //     endDate,
  //   });
  //   await newSubscription.save();
  //   res.status(201).json(newSubscription);
  // } catch (err) {
  //   res.status(400).json({ message: err.message });
  // }
};

//Users can view a list of all the services they have subscribed to.
const getUserSubscriptions = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate(
      "subscribedServices"
    );
    res.status(200).json(user.subscribedServices);
  } catch (error) {
    res.status(500).json({ message: "Error fetching subscriptions" });
  }
};

//Users can share their own subscriptions by selecting from predefined subscriptions.
//Their name will be added to the list of users sharing that subscription.
//post req

const shareSubscription = async (req, res) => {
  const { selectedSubscriptionId } = req.body;
  const userId = req.user._id;

  try {
    const subscription = await Subscription.findById(selectedSubscriptionId);
    if (!subscription) {
      return res.status(404).json({ message: "Subscription not found" });
    }

    // Add user to the usersSharing array in the Subscription
    subscription.usersSharing.push(userId);
    await subscription.save();

    // Add the subscription to the user's sharedSubscriptions
    const user = await User.findById(userId);
    user.sharedSubscriptions.push(selectedSubscriptionId);
    await user.save();

    res.status(200).json({ message: "Subscription shared successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error sharing subscription" });
  }
};

// const shareSubscription = async (req, res) => {
//   const { selectedSubscriptionId, serviceName, plans, startDate, endDate } =
//     req.body; // Destructure req.body here
//   const userId = req.user._id;

//   console.log(userId);
//   try {
//     const subscription = await Subscription.findById(selectedSubscriptionId);
//     if (!subscription) {
//       return res.status(404).json({ message: "Subscription not found" });
//     }

//     // Add user and subscription details to the subscription
//     subscription.usersSharing.push({
//       userId,
//       selectedSubscriptionId,
//       serviceName,
//       plans,
//       startDate,
//       endDate,
//     });
//     await subscription.save();

//     // Add the subscription and its details to the user’s sharedSubscriptions
//     const user = await User.findById(userId);
//     user.sharedSubscriptions.push({
//       selectedSubscriptionId,
//       serviceName,
//       plans,
//       startDate,
//       endDate,
//     });
//     await user.save();

//     res.status(200).json({ message: "Subscription shared successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Error sharing subscription" });
//   }
// };




const getSharedSubscriptions = async (req, res) => {
  try {
    // Use req.user from the authentication middleware
    const user = await User.findById(req.user._id)
      .populate("sharedSubscriptions")
      .exec();

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Send back the shared subscriptions
    res.status(200).json({
      success: true,
      sharedSubscriptions: user.sharedSubscriptions,
    });
  } catch (error) {
    console.error("Error retrieving shared subscriptions:", error);
    res.status(500).json({ message: "Server error" });
  }
};



module.exports = {
  subscriptions,
  getSubscriptionById,
  subscribeToService,
  getUserSubscriptions,
  shareSubscription,
  getSharedSubscriptions
};
