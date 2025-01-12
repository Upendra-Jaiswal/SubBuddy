const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
  payer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // User who paid
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }, // User receiving payment
  subscription: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subscription",
    required: true,
  }, // Associated subscription
  amount: { type: Number, required: true },
  status: {
    type: String,
    enum: ["Pending", "Completed", "Failed"],
    default: "Pending",
  },
  timestamp: { type: Date, default: Date.now },
});

const Payment = mongoose.model("Payment", PaymentSchema);
module.exports = Payment;
