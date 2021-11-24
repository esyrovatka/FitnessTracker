const User = require("../models/userModel.js");
const Workout = require("../models/workoutModel.js");
const Exercise = require("../models/exerciseModel.js");
const jwt = require("jsonwebtoken");

const getExecrises = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SERCRET_KEY);
    const findExercise = await Exercise.find({ userId: decoded.userId });
    res.status(200).json(findExercise);
  } catch (err) {
    console.log(err);
  }
};

const createExecrises = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SERCRET_KEY);

    const { name, type } = req.body;
    const exercise = new Exercise({ name, type, userId: decoded.userId });
    await exercise.save();
    res.status(200).json(exercise);
  } catch (err) {
    console.log(err);
  }
};

const updateExecrises = async (req, res) => {
  try {
    console.log(req.body);
    for (let i = 0; i < req.body.length; i++) {
      const result = await Exercise.findOneAndUpdate(
        { _id: req.body[i]._id },
        { name: req.body[i].name, type: req.body[i].type }
      );
    }
    res.status(200);
  } catch (err) {
    console.log(err);
  }
};

const deleteExecrises = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const { userId } = jwt.verify(token, process.env.SERCRET_KEY);
    const { id } = req.body;

    console.log(userId);
    const result = await Exercise.findByIdAndRemove({ _id: id });

    const workoutResult = await Workout.updateMany(
      { userId },
      { $pull: { exerciseList: { exerciseId: id } } },
      { multi: true }
    );

    res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getExecrises,
  createExecrises,
  updateExecrises,
  deleteExecrises,
};
