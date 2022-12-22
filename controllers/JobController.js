const Job = require("../models/Job");

exports.addJob = async (req, res) => {
  if (
    req.body.tags === null ||
    req.body.tags === undefined ||
    req.body.tags.length <= 0
  ) {
    res.status(500).json({
      error: true,
      error_msg: "Something went wrong...!",
    });
  } else {
    const tags_list = [];
    for (let i = 0; i < req.body.tags.length; i++) {
      tags_list.push({
        _id: req.body.tags[i]._id,
        name: req.body.tags[i].name,
      });
    }
  }
  const job = new Job({
    job_title: req.body.job_title,
    joib_description: req.body.job_description,
    amount: req.body.amount,
    job_type: req.body.job_type,
    tags: tags_list,
    is_active: req.body.is_active,
  });
  try {
    const response = await job.save();
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

exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    if (jobs.length !== 0) {
      res.status(200).json({ error: false, jobs: jobs });
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
    const response = await Job.findById(req.params.id);
    res.status(200).json({ error: false, job: response });
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
    if (
      req.body.tags === null ||
      req.body.tags === undefined ||
      req.body.tags.length <= 0
    ) {
      res.status(500).json({
        error: true,
        error_msg: "Something went wrong...!",
      });
    } else {
      const tags_list = [];
      for (let i = 0; i < req.body.tags.length; i++) {
        tags_list.push({
          _id: req.body.tags[i]._id,
          name: req.body.tags[i].name,
        });
      }
    }
    const response = await Job.updateOne(
      { _id: req.params.id },
      {
        $set: {
          job_title: req.body.job_title,
          joib_description: req.body.job_description,
          amount: req.body.amount,
          job_type: req.body.job_type,
          tags: tags_list,
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
    const response = await Job.deleteOne({ _id: req.params.id });
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
