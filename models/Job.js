const mongoose = require("mongoose");
const tag = require("./Tag");
const Job = new mongoose.Schema(
  {
    job_title: {
      type: String,
      required: [true, "Job title is missing"],
      maxlength: [255, "Job title cannot exceed 255 char"],
    },
    job_description: {
      type: String,
      required: [true, "Job description is missing"],
    },
    amount: {
      type: Number,
      required: [true, "Job amount is missing"],
    },
    job_type: {
      type: String,
      required: [true, "Job type is missing"],
    },
    tags: {
      type: [tag.schema],
      default: undefined,
      required: false,
    },
    is_active: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", Job);
