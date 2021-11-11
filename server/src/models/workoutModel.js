const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exerciseList: [
    {
      exerciseId: { type: Schema.Types.ObjectId, ref: "Exercise" },
      repeats: Number,
      measurement: Number,
    },
  ],
  data: Object,
  userId: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
