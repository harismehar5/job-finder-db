const JobSeeker = require("../models/JobSeeker");

exports.addJobSeeker = async (req, res) => {
  const jobSeeker = new JobSeeker({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const response = await jobSeeker.save();
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

exports.getJobSeekers = async (req, res) => {
  try {
    const jobSeekers = await JobSeeker.find();
    if (jobSeekers.length !== 0) {
      res.status(200).json({ error: false, job_seekers: jobSeekers });
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
    const response = await JobSeeker.findById(req.params.id);
    res.status(200).json({ error: false, job_seeker: response });
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
    const response = await JobSeeker.updateOne(
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
    const response = await Job.updateOne(
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
    const response = await JobSeeker.deleteOne({ _id: req.params.id });
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
