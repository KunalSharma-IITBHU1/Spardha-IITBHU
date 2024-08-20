import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    sport: String,
    date: Date,
    time: String,
    teams: [String],
    location: String,
  });

  
 export  const Event = mongoose.model('Event', eventSchema);

