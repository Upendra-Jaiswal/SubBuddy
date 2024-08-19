const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

// const DB_URI =
//   process.env.MONGODB_URI || "mongodb://localhost:27017/subsharemern"; // Default URI if not set in env

const DB_URI = process.env.MONGODB_URI; // Default URI if not set in env

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process with failure code
  }
};

// Monitor connection events
mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to database");
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected from database");
});

mongoose.connection.on("error", (err) => {
  console.error("Mongoose connection error:", err);
});

module.exports = connectDB;
