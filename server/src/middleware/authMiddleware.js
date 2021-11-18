const jwt_decode = require("jwt-decode");

function getTokenFromHeader(req, res, next) {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt_decode(token);
    decoded.exp > Math.floor(Date.now() / 1000) ? next() : res.sendStatus(401);
  } else {
    res.sendStatus(401);
  }
}

module.exports = getTokenFromHeader;
