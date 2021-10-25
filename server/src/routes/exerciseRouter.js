const express = require("express");
const router = express.Router();
const getTokenFromHeader = require("../middleware/authMiddleware");
const {
  getExecrises,
  createExecrises,
} = require("../controllers/exerciseControllers.js");

router.get("/exercise", getTokenFromHeader, getExecrises);
router.post("/exercise", getTokenFromHeader, createExecrises);

module.exports = router;
