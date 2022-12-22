const mongoose = require("mongoose");

const Rating = new mongoose.Schema({
  job_seeker_id: { type: mongoose.Schema.Types.ObjectId, ref: "JobSeeker" },
  job_poster_id: { type: mongoose.Schema.Types.ObjectId, ref: "JobPoster" },
  job_id: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
  job_seeker_review: { type: String, required: false },
  job_poster_review: { type: String, required: false },
  job_seeker_rating: { type: Number, required: false },
  job_poster_rating: { type: Number, required: false },
});

module.exports = mongoose.model("Rating", Rating);
