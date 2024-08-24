const mongoose = require('mongoose');

const PlanSchema = new mongoose.Schema({
  name: String,
  price: String,
  description: String,
});

const UserSchema = new mongoose.Schema({
  id: Number,
  name: String,
});

const SubscriptionSchema = new mongoose.Schema({
  id: Number,
  name: String,
  total_users_worldwide: String,
  image: String,
  users: [UserSchema],
  plans: [PlanSchema],
});

const Subscription = mongoose.model('Subscription', SubscriptionSchema);

module.exports = Subscription;
