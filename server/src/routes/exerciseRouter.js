const express = require("express");
const router = express.Router();
const getTokenFromHeader = require("../middleware/authMiddleware");
const {
  getExecrises,
  createExecrises,
  updateExecrises,
  deleteExecrises,
} = require("../controllers/exerciseControllers.js");

router.get("/exercise", getTokenFromHeader, getExecrises);
router.post("/exercise", getTokenFromHeader, createExecrises);
router.put("/exercise/update", getTokenFromHeader, updateExecrises);
router.post("/exercise/delete", getTokenFromHeader, deleteExecrises);

module.exports = router;
