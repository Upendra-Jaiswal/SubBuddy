const Payment = require("../models/paymentSchema"); // Adjust path as needed
const User = require("../models/userModel"); // Adjust path as needed
const Subscription = require("../models/subscriptionModel"); // Adjust path as needed

// Fetch payment details along with payer, receiver, and subscription info
const getPaymentDetails2 = async (paymentId) => {
  try {
    const payment = await Payment.findById(paymentId)
      .populate("payer", "name") // Populating payer's name
      .populate("receiver", "name") // Populating receiver's name
      .populate("subscription", "name") // Populating subscription's name
      .exec();

    // Extracting the data
    const paymentDetails = {
      payerName: payment.payer.name,
      receiverName: payment.receiver.name,
      amount: payment.amount,
      subscriptionName: payment.subscription.name,
    };

    return paymentDetails;
  } catch (error) {
    console.error("Error fetching payment details:", error);
    throw error;
  }
};

const getPaymentDetails4 = async (req, res) => {
  try {
    console.log(req.user);
    // Use req.user from the authentication middleware
    const user = await User.findById(req.user._id).populate("Payment").exec();

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Send back the shared subscriptions
    res.status(200).json({
      success: true,
      Payment: user.paymentsMade,
    });
  } catch (error) {
    console.error("Error retrieving shared subscriptions:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getPaymentDetails3 = async (req, res) => {
  try {
    // Find user by ID and populate both paymentsMade and paymentsReceived
    const user = await User.findById(req.user._id)
      .populate({
        path: "paymentsMade",
        populate: { path: "receiver subscription", select: "name" }, // Populate receiver's name and subscription's name
      })
      .populate({
        path: "paymentsReceived",
        populate: { path: "payer subscription", select: "name" }, // Populate payer's name and subscription's name
      })
      .exec();

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Structure the response with payments made and received
    const response = {
      success: true,
      paymentsMade: user.paymentsMade.map((payment) => ({
        amount: payment.amount,
        receiverName: payment.receiver.name,
        subscriptionName: payment.subscription.name,
        status: payment.status,
      })),
      paymentsReceived: user.paymentsReceived.map((payment) => ({
        amount: payment.amount,
        payerName: payment.payer.name,
        subscriptionName: payment.subscription.name,
        status: payment.status,
      })),
    };

    // Send the response
    res.status(200).json(response);
  } catch (error) {
    console.error("Error retrieving payment details:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getPaymentDetails6 = async (req, res) => {
  try {
    // console.log(req.user);

    // Fetch the user with populated paymentsMade and paymentsReceived
    const user = await User.findById(req.user._id)
      .populate("paymentsMade")
      .populate("paymentsReceived")
      .exec();

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    console.log(user.paymentsMade, user.paymentsReceived);

    // Send back paymentsMade and paymentsReceived
    res.status(200).json({
      success: true,
      paymentsMade: user.paymentsMade,
      paymentsReceived: user.paymentsReceived,
    });
  } catch (error) {
    console.error("Error retrieving payment details:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getPaymentDetails8 = async (req, res) => {
  try {
    // Fetch the user with populated paymentsMade and paymentsReceived
    const user = await User.findById(req.user._id)
      .populate({
        path: "paymentsMade",
        populate: {
          path: "receiver",
          select: "name", // Only fetch the name of the receiver
        },
      })
      .populate({
        path: "paymentsReceived",
        populate: {
          path: "payer",
          select: "name", // Only fetch the name of the payer
        },
      })
      .exec();

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // You can now access the payer's and receiver's names
    const paymentsMade = user.paymentsMade.map((payment) => ({
      amount: payment.amount,
      receiverName: payment.receiver.name, // Receiver's name
      status: payment.status,
      timestamp: payment.timestamp,
    }));

    const paymentsReceived = user.paymentsReceived.map((payment) => ({
      amount: payment.amount,
      payerName: payment.payer.name, // Payer's name
      status: payment.status,
      timestamp: payment.timestamp,
    }));

    // Send back paymentsMade and paymentsReceived along with the names
    res.status(200).json({
      success: true,
      paymentsMade,
      paymentsReceived,
    });
  } catch (error) {
    console.error("Error retrieving payment details:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getPaymentDetails = async (req, res) => {
  try {
    // Fetch the user with populated paymentsMade and paymentsReceived
    const user = await User.findById(req.user._id)
      .populate({
        path: "paymentsMade",
        populate: [
          { path: "receiver", select: "name" }, // Only fetch the name of the receiver
          { path: "subscription", select: "name price type" }, // Fetch subscription details
        ],
      })
      .populate({
        path: "paymentsReceived",
        populate: [
          { path: "payer", select: "name" }, // Only fetch the name of the payer
          { path: "subscription", select: "name price type" }, // Fetch subscription details
        ],
      })
      .exec();

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // You can now access the payer's, receiver's, and subscription details
    const paymentsMade = user.paymentsMade.map((payment) => ({
      amount: payment.amount,
      receiverName: payment.receiver.name,
      subscription: payment.subscription, // Subscription details
      status: payment.status,
      timestamp: payment.timestamp,
    }));

    const paymentsReceived = user.paymentsReceived.map((payment) => ({
      amount: payment.amount,
      payerName: payment.payer.name,
      subscription: payment.subscription, // Subscription details
      status: payment.status,
      timestamp: payment.timestamp,
    }));

    // Send back paymentsMade and paymentsReceived along with the subscription details
    res.status(200).json({
      success: true,
      paymentsMade,
      paymentsReceived,
    });
  } catch (error) {
    console.error("Error retrieving payment details:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getPaymentDetails,
};
