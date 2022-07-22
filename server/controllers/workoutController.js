const Workout = require("../models/workout.js");
const mongoose = require("mongoose");

//get all workouts
const getWorkouts = async (req, res, next) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};
//get a single workout
const getWorkout = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ message: "workout not found!" });
  }

  const workout = await Workout.findById(id);

  if (!workout) {
    res.status(404).json({ message: "workout not found!" });
  }
  res.status(200).json(workout);
};
//create a new workout
const createWorkout = async (req, res, next) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//delete a workout

//update a workout

module.exports = {
  createWorkout,
  getWorkout,
  getWorkouts,
};
