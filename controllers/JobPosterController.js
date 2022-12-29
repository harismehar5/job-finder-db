const JobPoster = require("../models/JobPoster");

exports.addJobPoster = async (req, res) => {
  const jobPoster = new JobPoster({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const response = await jobPoster.save();
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

exports.getJobPosters = async (req, res) => {
  try {
    const jobPosters = await JobPoster.find();
    if (jobPosters.length !== 0) {
      res.status(200).json({ error: false, job_posters: jobPosters });
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
    const response = await JobPoster.findById(req.params.id);
    res.status(200).json({ error: false, job_poster: response });
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
    const response = await JobPoster.updateOne(
      { _id: req.params.id },
      {
        $set: {
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          phone: req.body.phone,
          email: req.body.email,
          password: req.body.password,
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

exports.updateStatus = async (req, res) => {
  try {
    const response = await JobPoster.updateOne(
      { _id: req.params.id },
      {
        $set: {
          is_active: req.body.is_active,
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
    const response = await JobPoster.deleteOne({ _id: req.params.id });
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
