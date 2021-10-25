const express = require("express");
const router = express.Router();
const generateAccessToken = require("../middleware/authMiddleware");
const { registr, login } = require("../controllers/authControllers.js");

router.post("/registr", registr);
router.post("/login", login);

module.exports = router;
