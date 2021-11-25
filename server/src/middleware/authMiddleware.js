const jwt = require("jsonwebtoken");

function authMW(req, res, next) {
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer" &&
      req.headers.authorization.split(" ")[1] !== "undefined"
    ) {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.SERCRET_KEY);
      decoded.exp > Math.floor(Date.now() / 1000)
        ? next()
        : res.sendStatus(401);
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    res.sendStatus(401);
  }
}

module.exports = authMW;
