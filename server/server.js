require("dotenv").config();
const express = require("express");
var cors = require('cors')
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");
//express app
const app = express();
// cors middleware
app.use(cors());
//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/workouts", workoutRoutes);

//connect database mongo
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    console.log("connected");
    app.listen(process.env.PORT, () => {
      console.log("hello from express port : ", process.env.PORT);
    });
  })
  .catch((error) => console.log(error));

//listen for request

process.env;
