const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  name: String,
  type: String,
  iserId: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
