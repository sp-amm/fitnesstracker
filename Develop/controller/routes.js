const router = require("express").Router();
//Import workouts model to use database
const Workouts = require("../models/workouts.js");

//Route to add new exercises
router.put("/api/workouts", ({ body }, res) => {
  console.log({ body });    
  Workouts.create(body)
    .then(dbexercise => {
      res.json(dbexercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//Route to add new workouts
router.post("/api/workouts/range", ({ body }, res) => {
  console.log({ body });  
  Workouts.insertMany(body)
    .then(dbexercise => {
      res.json(dbexercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//Route to show last workout


//Route to show all workouts
router.get("/api/workouts", (req, res) => {
    Workouts.find({})
    .sort({ date: -1 })
    .then(dbexercise => {
      res.json(dbexercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
