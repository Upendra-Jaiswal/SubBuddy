const express = require("express");
const connectDB = require("./config/db"); // Import the DB connection function
const authRoutes = require("./routes/authRoutes");
const subscriptionRoutes = require("./routes/subscriptionRoutes");
const userRoutes = require("./routes/userRoutes.js");
const cors = require("cors");
require("dotenv").config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3001; // Use environment variable for port or default to 3001

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB(); // Establish connection to the database

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

// Use authentication routes
app.use("/api", authRoutes);

app.use("/api", subscriptionRoutes);

app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
