const mongoose = require("mongoose");
const { Schema } = mongoose;

const subscriptionSchema = new Schema({
  serviceName: { type: String, required: true },
  id: { type: Number, required: true },
  name: { type: String, required: true },
  total_users_worldwide: { type: String },
  image: { type: String },
  users: [{ type: Schema.Types.ObjectId, ref: "User" }], // References User model
  plans: [
    {
      name: { type: String, required: true },
      price: { type: String, required: true },
      description: { type: String },
    },
  ],
});

const Subscription = mongoose.model("Subscription", subscriptionSchema);

module.exports = Subscription;