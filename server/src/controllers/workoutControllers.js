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

const editWorkout = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, secret);

    const { _id, exerciseList } = req.body;
    console.log(exerciseList);
    await Workout.findOneAndUpdate({ _id }, { exerciseList });

    console.log("Workout edit");
    res.status(200);
  } catch (err) {
    console.log(err);
  }
};

const getWorkout = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, secret);
    const workout = await Workout.find({ userId: decoded.userId });
    res.status(200).json(workout);
    // if (workout.length) {
    //   res.status(200).json(workout);
    // } else {
    //   res.status(404).json("Havn't Workout");
    // }
  } catch (err) {
    console.log(err);
  }
};

const deleteWorkout = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, secret);
    const { _id } = req.body;

    const result = await Workout.findByIdAndRemove({ _id });
    console.log("Workout delete");
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createWorkout, getWorkout, editWorkout, deleteWorkout };
