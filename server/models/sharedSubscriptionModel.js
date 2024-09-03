// const mongoose = require("mongoose");
// const { Schema } = mongoose;

// const SharedSubscriptionSchema = new Schema({
//   serviceName: {
//     type: String,
//     required: true,
//   },
//   subscriptionId: {
//     type: mongoose.Schema.Types.ObjectId,
//    // ref: "Subscription", // Reference to Subscription model
//     required: true,
//   },
// //   plans: [
// //     {
// //       name: { type: String, required: true },
// //       price: { type: String, required: true },
// //       description: { type: String },
// //     },
// //   ],

// plans: [
//     {
//       name: { type: String, required: true },
//       price: { type: String, required: true },
//       description: { type: String },
//     },
//   ],
//   startDate: {
//     type: Date,
//     required: true,
//   },
//   endDate: {
//     type: Date,
//     required: true,
//   },
//   userID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User", // Reference to User model
//     required: true,
//   },
// });

// const SharedSubscription = mongoose.model(
//   "SharedSubscription",
//   SharedSubscriptionSchema
// );

// module.exports = SharedSubscription;

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
