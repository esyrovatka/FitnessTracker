const express = require("express");
const router = express.Router();
const {
  registr,
  login,
  userUpdate,
} = require("../controllers/authControllers.js");

router.post("/registr", registr);
router.post("/login", login);
router.post("/user/update", userUpdate);

module.exports = router;
