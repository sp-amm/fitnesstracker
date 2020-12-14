const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutsSchema = new Schema({

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
          weight: {
            type: Number,
            required: "Enter an amount"
          },
          reps: {
            type: Number,
            required: "Enter an amount"
          },
          sets: {
            type: Number,
            required: "Enter an amount"
          },
          date: {
              type: Date, 
              default: Date.now
          }
    
});

const Workouts = mongoose.model("Exercise", workoutsSchema);

module.exports = Workouts;