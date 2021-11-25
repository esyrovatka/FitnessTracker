const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const authRoutes = require("./src/routes/authRouter");
const exerciseRouter = require("./src/routes/exerciseRouter");
const workoutRouter = require("./src/routes/workoutRouter");
const authMW = require("./src/middleware/authMiddleware");

dotenv.config();

app
  .use(express.json())
  .use(cors())
  .use("/api", authRoutes)
  .use("/api/exercise", authMW, exerciseRouter)
  .use("/api/workout", authMW, workoutRouter);

// main function
(async () => {
  try {
    mongoose.connection.once("open", () =>
      console.log(`Connected to mongo database: `, process.env.MONGO_URI)
    );
    mongoose.connection.on("error", () => console.log({ err }));
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(process.env.PORT, () => {
      console.log(`Server is listening on ${process.env.PORT}`);
    });
  } catch (err) {
    console.log("SERVER LAUNCH ERROR: ", err);
    process.exit(1);
  }
})();
