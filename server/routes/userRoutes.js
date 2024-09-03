const express = require("express");

const { getusers } = require("../controllers/userController");

const router = express.Router();

router.get("/getusers", getusers);

module.exports = router;
