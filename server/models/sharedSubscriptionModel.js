

const mongoose = require("mongoose");
const { Schema } = mongoose;

const SharedSubscriptionSchema = new Schema({
  serviceName: {
    type: String,
    required: true,
  },
  plans: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
});

const SharedSubscription = mongoose.model(
  "SharedSubscription",
  SharedSubscriptionSchema
);

module.exports = SharedSubscription;
