const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/userModel.js");
const userRoutes = require("./routers/userRoutes.js");
const cors = require("cors");
require("dotenv").config(); // Load environment variables

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

const uri = "mongodb://localhost:27017/subsharemern";

mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB connected successfuly");
  })
  .catch((err) => {
    console.error("mongodb connection error");
  });

mongoose.connection.on("connected", () => {
  console.log("mongodb connected to ddatabse");
});

mongoose.connection.on("disconnected", () => {
  console.log("mongoose diconnected from database");
});
mongoose.connection.on("error", (err) => {
  console.error("Mongoose connection error:", err);
});

app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
