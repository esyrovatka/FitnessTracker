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
      console.log("req.body", req.body);
      const { email, password } = req.body;
      const user = new User({ email, password });
      await user.save();
      const token = generateAccessToken({ name: email });
      res.json(token);
    } catch (err) {
      console.log(err);
    }
  });
};
