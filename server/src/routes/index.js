const userRoutes = require("./user_router");
module.exports = function (app) {
  userRoutes(app);
};
