const User = require("../models/userModel");
const { createHmac } = require("crypto");
const jwt = require("jsonwebtoken");
const secret = "fitnessTracker";
const hash = createHmac("sha256", secret)
  .update("fitnessTracker")
  .digest("hex");

function generateAccessToken(name) {
  return jwt.sign(name, hash, { expiresIn: "1800s" });
}

module.exports = function (app) {
  app.post("/registr", async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = new User({ email, password });
      await user.save();
      const token = generateAccessToken({ name: email });
      res.json(token);
      console.log("registr success");
    } catch (err) {
      console.log(err);
    }
  });

  app.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.find({ email });
      if (user.length && user.password === password) {
        const token = generateAccessToken({ name: email });
        res.json(token);
      } else {
        console.log("not found");
      }
    } catch (err) {
      console.log(err);
    }
  });
};
