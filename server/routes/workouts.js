const express = require('express');
const router = express.Router();


//Get all the workouts
router.get("/", (req, res, next) => {
  res.json({ message: "get all the workouts" });
});

//Get a single workout
router.get("/:id", (req, res, next) => {
  res.json({ message: "get single workout" });
});

router.post("/",(req,res,next)=> {
    res.json({message:"add a new workout"})
})

router.delete("/:id",(req,res,next)=> {
    res.json({message:"delete a single workout"})
})

router.patch("/:id",(req,res,next)=> {
    res.json({message:"update a workout"})
})



module.exports = router;
