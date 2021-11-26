const Workout = require("../models/workoutModel.js");
const jwt = require("jsonwebtoken");

const createWorkout = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SERCRET_KEY);

    const { data, exerciseList } = req.body;
    const workout = new Workout({
      userId: decoded.userId,
      data,
      exerciseList,
    });
    await workout.save();
    console.log("Workout create");
    res.sendStatus(200).json(workout);
  } catch (err) {
    console.log(err);
  }
};

const editWorkout = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SERCRET_KEY);

    const { _id, exerciseList } = req.body;
    await Workout.findOneAndUpdate({ _id }, { exerciseList });

    console.log("Workout edit");
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
};

const getWorkout = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SERCRET_KEY);
    const workout = await Workout.find({ userId: decoded.userId });
    res.status(200).json(workout);
  } catch (err) {
    console.log(err);
  }
};

const deleteWorkout = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SERCRET_KEY);
    const { _id } = req.body;

    const result = await Workout.findByIdAndRemove({ _id });
    console.log("Workout delete");
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createWorkout, getWorkout, editWorkout, deleteWorkout };
