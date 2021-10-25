const { createHmac } = require("crypto");
const jwt = require("jsonwebtoken");

const secret = "fitnessTracker";
const hash = createHmac("sha256", secret)
  .update("fitnessTracker")
  .digest("hex");

function createToken(name) {
  return jwt.sign(name, hash, { expiresIn: "1800s" });
}

function generateAccessToken(req, res, next) {
  const { email } = req.body;
  const token = createToken({ name: email });
  req.body.token = token;
  next();
}

module.exports = generateAccessToken;
