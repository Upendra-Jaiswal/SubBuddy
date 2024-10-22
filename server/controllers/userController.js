const User = require("../models/userModel");

const getusers = async (req, res) => {

  try {
    const users = await User.find();
    return res.send(users);
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};



module.exports = { getusers };
