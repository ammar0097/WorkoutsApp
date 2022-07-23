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
const deleteWorkout = async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ message: "wno such workout" });
  }
  const workout = await Workout.findOneAndDelete({ _id: id });
  if (!workout) {
    res.status(400).json("no such workout");
  }
  res.status(200).json({ message: "workout deleted" });
};

//update a workout
const updateWorkout = async (req, res, next) => {
  const { id } = req.params;
  const { title, load, reps } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ message: "wno such workout" });
  }
  const workout = await Workout.findOneAndUpdate(
    { _id: id },
    { title: title, load: load, reps: reps }
  );
  if (!workout) {
    res.status(400).json({ message: "no such workout" });
  }
  res.status(200).json({ message: "workout updated" });
};

module.exports = {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
};
