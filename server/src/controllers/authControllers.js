const User = require("../models/userModel.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const registr = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await User.find({ email });
    if (findUser.length) {
      res.status(406).json("email is already in use");
    } else {
      const hash_password = bcrypt.hashSync(password, 10);
      const user = new User({ email, password: hash_password });
      await user.save();
      token = jwt.sign({ userId: user._id }, process.env.SERCRET_KEY, {
        expiresIn: "180000s",
      });
      res.status(201).json(token);
    }
  } catch (err) {
    console.log(err);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.find({ email });

    if (user.length) {
      const token = jwt.sign({ userId: user[0]._id }, process.env.SERCRET_KEY, {
        expiresIn: "180000s",
      });
      bcrypt.compareSync(password, user[0].password)
        ? res.status(200).json({ token, user })
        : res.status(404).json("password not correct");
    } else {
      res.status(404).json("not found user with this email");
    }
  } catch (err) {
    console.log(err);
  }
};

const userUpdate = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SERCRET_KEY);
    await User.findOneAndUpdate({ _id: decoded.userId }, req.body);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  registr,
  login,
  userUpdate,
};
