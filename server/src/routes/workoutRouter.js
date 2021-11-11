const express = require("express");
const router = express.Router();
const getTokenFromHeader = require("../middleware/authMiddleware");
const {
  createWorkout,
  getWorkout,
  editWorkout,
  deleteWorkout,
} = require("../controllers/workoutControllers.js");

router.get("/workout", getTokenFromHeader, getWorkout);
router.post("/workout", getTokenFromHeader, createWorkout);
router.put("/workout/edit", getTokenFromHeader, editWorkout);
router.post("/workout/delete", getTokenFromHeader, deleteWorkout);

module.exports = router;
