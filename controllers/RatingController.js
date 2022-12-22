const Rating = require("../models/Rating");

exports.addRating = async (req, res) => {
  const rating = new Rating({
    job_seeker_id: req.body.job_seeker_id,
    job_poster_id: req.body.job_poster_id,
    job_id: req.body.job_id,
    job_seeker_review: req.body.job_seeker_review,
    job_seeker_rating: req.body.job_seeker_rating,
    job_poster_review: req.body.job_poster_review,
    job_poster_rating: req.body.job_poster_rating,
  });
  try {
    const response = await rating.save();
    res.status(200).json({
      error: false,
      success_msg: "Data submitted successfully",
      response: response,
    });
  } catch (err) {
    res.status(500).json({
      error: true,
      error_msg: "Something went wrong...!",
      response: err.toString(),
    });
  }
};

exports.getRatings = async (req, res) => {
  try {
    const ratings = await Rating.find();
    if (ratings.length !== 0) {
      res.status(200).json({ error: false, ratings: ratings });
    } else {
      res.status(500).json({
        error: true,
        error_msg: "No data found...!",
      });
    }
  } catch (err) {
    res.status(500).json({
      error: true,
      error_msg: "Something went wrong...!",
      response: err.toString(),
    });
  }
};

exports.getById = async (req, res) => {
  try {
    const response = await Rating.findById(req.params.id);
    res.status(200).json({ error: false, rating: response });
  } catch (err) {
    res.status(500).json({
      error: true,
      error_msg: "No Data Found",
      response: err.toString(),
    });
  }
};

exports.updateById = async (req, res) => {
  try {
    const response = await Rating.updateOne(
      { _id: req.params.id },
      {
        $set: {
          job_seeker_id: req.body.job_seeker_id,
          job_poster_id: req.body.job_poster_id,
          job_id: req.body.job_id,
          job_seeker_review: req.body.job_seeker_review,
          job_seeker_rating: req.body.job_seeker_rating,
          job_poster_review: req.body.job_poster_review,
          job_poster_rating: req.body.job_poster_rating,
        },
      }
    );
    res.status(200).json({
      error: false,
      success_msg: "Data updated successfully",
      response: response,
    });
  } catch (err) {
    res.status(500).json({
      error: true,
      error_msg: "Something went wrong...!",
      response: err.toString(),
    });
  }
};

exports.deleteById = async (req, res) => {
  try {
    const response = await Rating.deleteOne({ _id: req.params.id });
    res.status(200).json({
      error: false,
      success_msg: "Data removed successfully",
      response: response,
    });
  } catch (err) {
    res.status(500).json({
      error: true,
      error_msg: "No Data Found",
      response: err.toString(),
    });
  }
};
