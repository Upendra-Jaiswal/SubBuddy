const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  sharedSubscriptions: [{ type: Schema.Types.ObjectId, ref: "Subscription" }], // Subscriptions the user is sharing
  subscribedServices: [{ type: Schema.Types.ObjectId, ref: "Subscription" }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
