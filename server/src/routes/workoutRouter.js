const express = require("express");
const router = express.Router();
// const getTokenFromHeader = require("../middleware/authMiddleware");
const { createWorkout } = require("../controllers/workoutControllers.js");

router.post("/workout", createWorkout);

module.exports = router;
