const express = require("express");
const router = express.Router();
const { createWorkout,getWorkout,getWorkouts } = require("../controllers/workoutController");

//Get all the workouts
router.get("/",getWorkouts);

//Get a single workout
router.get("/:id",getWorkout);

router.post("/", createWorkout);

router.delete("/:id", (req, res, next) => {
  res.json({ message: "delete a single workout" });
});

router.patch("/:id", (req, res, next) => {
  res.json({ message: "update a workout" });
});

module.exports = router;
