const express = require("express");
const router = express.Router();
const {
  getExecrises,
  createExecrises,
  updateExecrises,
  deleteExecrises,
} = require("../controllers/exerciseControllers.js");

router.get("/", getExecrises);
router.post("/", createExecrises);
router.put("/update", updateExecrises);
router.post("/delete", deleteExecrises);

module.exports = router;
