const User = require("../models/userModel");

module.exports = function (app) {
  app.post("/registr", async (req, res) => {
    try {
      console.log("req.body", req.body);
      const { email, password } = req.body;
      const user = new User({ email, password });
      await user.save();
      res.status(201).json(user);
    } catch (err) {
      console / log(err);
    }
  });
};
