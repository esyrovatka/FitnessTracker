const { Router } = require("express");
const router = Router();
const {
  createWorkout,
  getWorkout,
  editWorkout,
  deleteWorkout,
} = require("../controllers/workoutControllers.js");

router.get("/", getWorkout);
router.post("/", createWorkout);
router.put("/edit", editWorkout);
router.post("/delete", deleteWorkout);

module.exports = router;
