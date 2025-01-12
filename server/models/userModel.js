const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  sharedSubscriptions: [{ type: Schema.Types.ObjectId, ref: "Subscription" }], // Subscriptions the user is sharing
  subscribedServices: [{ type: Schema.Types.ObjectId, ref: "Subscription" }],
  paidSubscriptions: [{ type: Schema.Types.ObjectId, ref: "Subscription" }],

  //subscriptionsShared: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subscription' }],
  // subscriptionsJoined: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subscription' }],
  paymentsMade: [{ type: mongoose.Schema.Types.ObjectId, ref: "Payment" }], // Payments user made
  paymentsReceived: [{ type: mongoose.Schema.Types.ObjectId, ref: "Payment" }], // Payments user received
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
