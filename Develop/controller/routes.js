const router = require("express").Router();
//Import workouts model to use database
const Workouts = require("../models/workouts.js");


// Route to add a new exercise to a workout by ID
router.put('/api/workouts/:id', ({ body, params }, res) => {
	Workouts.findByIdAndUpdate(params.id, { $push: { exercises: body } }, { new: true, runValidators: true })
		.then((data) => {
			res.json(data);
			console.log(data);
		})
		.catch((err) => {
			res.status(400).json(err);
			console.log(err);
		});
});

//Route to create a new workout
router.post("/api/workouts", ({ body }, res) => {
  console.log(body);  
  Workouts.create(body)
    .then(data => {
      res.json(data);
      console.log(data);
    })
    .catch(err => {
      res.status(400).json(err);
      console.log(err);
    });
});

//Route to show workouts in stats
router.get("/api/workouts/range", (req, res) => {
  console.log(req.body);  
  Workouts.find()
    .then(dbexercise => {
      res.json(dbexercise);
      console.log(dbexercise);
    })
    .catch(err => {
      res.status(400).json(err);
      console.log(err)
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
      console.log(err)
    });
});

module.exports = router;
