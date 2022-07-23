const express = require("express");
const router = express.Router();
const { createWorkout,getWorkout,getWorkouts, deleteWorkout,updateWorkout} = require("../controllers/workoutController");

//Get all the workouts
router.get("/",getWorkouts);

//Get a single workout
router.get("/:id",getWorkout);

router.post("/", createWorkout);

router.delete("/:id",deleteWorkout);

router.patch("/:id",updateWorkout);

module.exports = router;
