const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  subscriptions: [{ type: Schema.Types.ObjectId, ref: 'Subscription' }] // Optional: if you want to track user subscriptions
});

const User = mongoose.model('User', userSchema);

module.exports = User;
