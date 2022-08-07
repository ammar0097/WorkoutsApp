const express = require("express");
const { createWorkout,getWorkout,getWorkouts, deleteWorkout,updateWorkout} = require("../controllers/workoutController");
const requireAuth = require('../middleware/requireAuth');


const router = express.Router();


// require auth to all workouts routes
router.use(requireAuth);

//Get all the workouts
router.get("/",getWorkouts);

//Get a single workout
router.get("/:id",getWorkout);

router.post("/", createWorkout);

router.delete("/:id",deleteWorkout);

router.patch("/:id",updateWorkout);

module.exports = router;
