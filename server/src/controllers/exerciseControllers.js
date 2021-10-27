const User = require("../models/userModel.js");
const Exercise = require("../models/exerciseModel.js");
const jwt = require("jsonwebtoken");
const secret = "fitnessTracker";

const getExecrises = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, secret);
    const findExercise = await Exercise.find({ userId: decoded.userId });

    if (findExercise.length) {
      res.status(200).json(findExercise);
    } else {
      console.log("Exercise  not find");
      res.status(401).json("Havn't exercise");
    }
  } catch (err) {
    console.log(err);
  }
};

const createExecrises = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, secret);

    const { name, type } = req.body;
    const exercise = new Exercise({ name, type, userId: decoded.userId });
    await exercise.save();
    console.log("Exercise create");
  } catch (err) {
    console.log(err);
  }
};

const updateExecrises = async (req, res) => {
  try {
    for (let i = 0; i < req.body.length; i++) {
      await Exercise.findOneAndUpdate(
        { _id: req.body[i]._id },
        { name: req.body[i].name, type: req.body[i].type }
      );
    }
  } catch (err) {
    console.log(err);
  }
};

const deleteExecrises = async (req, res) => {
  try {
    console.log("3req", req.body);

    const { id } = req.body;
    const result = await Exercise.findByIdAndRemove({ _id: id });
    console.log("Exercise delete");
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
