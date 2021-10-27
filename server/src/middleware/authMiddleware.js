function getTokenFromHeader(req, res, next) {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    next();
  }
}

module.exports = getTokenFromHeader;
