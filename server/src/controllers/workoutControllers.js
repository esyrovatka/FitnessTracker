const User = require("../models/userModel.js");
const Workout = require("../models/workoutModel.js");
const jwt = require("jsonwebtoken");
const secret = "fitnessTracker";

const createWorkout = async (req, res) => {
  try {
    console.log("req.body 1");
    console.log(req.body, "req.body");
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, secret);

    const { data, exerciseList } = req.body;
    const workout = new Workout({
      userId: decoded.userId,
      data,
      exerciseList,
    });
    await workout.save();
    console.log("Workout create");
    res.status(200).json(workout);
  } catch (err) {
    console.log(err);
  }
};

// const getWorkout = async (req, res) => {
//   try {
//     const token = req.headers.authorization.split(" ")[1];
//     const decoded = jwt.verify(token, secret);
//     const findWorkout = await Workout.find({ userId: decoded.userId });

//     if (findWorkout.length) {
//       res.status(200).json(findWorkout);
//     } else {
//       console.log("Workout  not find");
//       res.status(401).json("Havn't Workout");
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

module.exports = { createWorkout };
