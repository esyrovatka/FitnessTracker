const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  name: String,
  type: String,
  userId: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
