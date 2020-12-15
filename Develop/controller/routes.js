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
/* router.post("/api/workouts/range", (req, res) => {
  console.log(req.body);  
  Workouts.insertMany(req.body)
    .then(dbexercise => {
      res.json(dbexercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
}); */

//Route to show all workouts in stats
router.get("/api/workouts/range", (req, res) => {
  console.log(req.body);  
  Workouts.find()
    .then(dbexercise => {
      res.json(dbexercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});



//Route to show most recent workout
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
