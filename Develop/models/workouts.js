const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutsSchema = new Schema({

          exercises: [{
            type: {
              type: String,
              trim: true,
              required: "Enter resistance or cario."
            },
            name: {
              type: String,
              trim: true,
              required: "Enter a name for the exercise."
            },
            duration: {
              type: Number,
              required: "Enter an amount"
            },
            distance: {
              type: Number,
            },
            weight: {
              type: Number,
            },
            reps: {
              type: Number,
            },
            sets: {
              type: Number,
            },
          }],
          day: {
              type: Date, 
              default: Date.now
          }
    
});

const Workouts = mongoose.model("Workout", workoutsSchema);

module.exports = Workouts;
