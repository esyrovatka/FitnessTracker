const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 3001;
app.use(express.json());
app.use(cors());
require("./src/routes")(app);

connectDb()
  .then(() => console.log("mongoose connect"))
  .catch((err) => console.log(err));

async function connectDb() {
  await mongoose.connect("mongodb://localhost:27017/test");
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
