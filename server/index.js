const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());
app.use(cors());
const routes = require("./src/routes");
app.use("/api", routes);

connectDb()
  .then(() => console.log(`mongoose connect ${process.env.PORT}`))
  .catch((err) => console.log(err));

async function connectDb() {
  await mongoose.connect("mongodb://localhost:27017/test");
}

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
