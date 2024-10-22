const express = require("express");
const connectDB = require("./config/db"); // Import the DB connection function
const authRoutes = require("./routes/authRoutes");
const subscriptionRoutes = require("./routes/subscriptionRoutes");
const userRoutes = require("./routes/userRoutes.js");
const authenticateToken = require("./middlewares/authMiddleware");
const crypto = require("crypto");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3001; // Use environment variable for port or default to 3001
const helmet = require("helmet");

let salt_key = "96434309-7796-489d-8924-ab56988a6076";
let merchant_id = "PGTESTPAYUAT86";

// Middleware
app.use(express.json());
app.use(cors());

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        connectSrc: [
          "'self'",
          "http://127.0.0.1:8000",
          "ws://localhost:42877/",
        ],
      },
    },
  })
);

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

app.post("/order", async (req, res) => {
  try {
    let merchantTransactionId = req.body.transactionId;

    const data = {
      merchantId: merchant_id,
      merchantTransactionId: merchantTransactionId,
      name: req.body.name,
      amount: req.body.amount * 100,
      redirectUrl: `http://localhost:8000/status?id=${merchantTransactionId}`,
      redirectMode: "POST",
      mobileNumber: req.body.phone,
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };

    const payload = JSON.stringify(data);
    const payloadMain = Buffer.from(payload).toString("base64");
    const keyIndex = 1;
    const string = payloadMain + "/pg/v1/pay" + salt_key;
    const sha256 = crypto.createHash("sha256").update(string).digest("hex");
    const checksum = sha256 + "###" + keyIndex;

    // const prod_URL = "https://api.phonepe.com/apis/hermes/pg/v1/pay"
    const prod_URL =
      "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";

    const options = {
      method: "POST",
      url: prod_URL,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
      },
      data: {
        request: payloadMain,
      },
    };

    await axios(options)
      .then(function (response) {
        console.log(response.data);
        return res.json(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
});

app.post("/status", async (req, res) => {
  const merchantTransactionId = req.query.id;
  const merchantId = merchant_id;

  const keyIndex = 1;
  const string =
    `/pg/v1/status/${merchantId}/${merchantTransactionId}` + salt_key;
  const sha256 = crypto.createHash("sha256").update(string).digest("hex");
  const checksum = sha256 + "###" + keyIndex;

  const options = {
    method: "GET",
    url: `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${merchantTransactionId}`,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "X-VERIFY": checksum,
      "X-MERCHANT-ID": `${merchantId}`,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      if (response.data.success === true) {
        const url = "http://localhost:5173/success";
        return res.redirect(url);
      } else {
        const url = "http://localhost:5173/fail";
        return res.redirect(url);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
