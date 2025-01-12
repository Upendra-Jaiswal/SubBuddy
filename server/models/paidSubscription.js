const mongoose = require("mongoose");
const { Schema } = mongoose;

const paidSubscriptionSchema = new Schema({
  // userID: { type: String, required: true },
  // userName: { type: String, required: true },
 userID: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the User who paid

  merchantID: { type: String, required: true },
  bookingDetails: {
    type: Object,
    required: true, // Ensure bookingDetails is always provided
  },

  // usersSharing: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

const PaidSubscription = mongoose.model(
  "PaidSubscription",
  paidSubscriptionSchema
);

module.exports = PaidSubscription;
