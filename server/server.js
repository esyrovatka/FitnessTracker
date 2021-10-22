const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
require("./src/routes")(app);

const dotenv = require("dotenv");
dotenv.config();

connectDb()
  .then(() => console.log(`mongoose connect ${process.env.PORT}`))
  .catch((err) => console.log(err));

async function connectDb() {
  await mongoose.connect("mongodb://localhost:27017/test");
}

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
