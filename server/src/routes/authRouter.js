const express = require("express");
const router = express.Router();
const generateAccessToken = require("../middleware/authMiddleware");
const User = require("../models/userModel");

router.route("/registr").post(generateAccessToken, async (req, res) => {
  try {
    const { email, password, token } = req.body;
    const findUser = await User.find({ email });
    if (findUser.length) {
      console.log("123123", findUser);
      res.status(406).json("email is already in use");
    } else {
      const user = new User({ email, password });
      await user.save();
      res.status(201).json(token);
    }
  } catch (err) {
    console.log(err);
  }
});

router.route("/login").post(generateAccessToken, async (req, res) => {
  try {
    const { email, password, token } = req.body;
    const user = await User.find({ email, password });
    if (user.length) {
      res.status(200).json(token);
    } else {
      res.status(401).json("not found user with this email and password");
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
