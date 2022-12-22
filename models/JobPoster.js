const mongoose = require("mongoose");
const validator = require("validator");

const JobPoster = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "Please enter first name"],
    maxlength: [30, "Your name cannot exceed 30 char"],
  },
  last_name: {
    type: String,
    required: [true, "Please enter last name"],
    maxlength: [30, "Your name cannot exceed 30 char"],
  },
  phone: {
    type: String,
    required: [true, "Please enter your phone number"]
  },
  email: {
    type: String,
    required: [true, "Enter Your Email"],
    unique: true,
    validate: [validator.isEmail, "Please enter valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minlength: [8, "Password must be longer than 8 char"],
  },
  gmail_id:{
    type: String,
    required: false,
  },
  facebook_id:{
    type: String,
    required: false,
  },
  notification_id:{
    type: String,
    required: false,
  },
  is_verified: {
    type: Boolean,
    required: true,
    default: false,
  },
  is_active: {
    type: Boolean,
    required: true,
    default: true,
  },
});

module.exports = mongoose.model("JobPoster", JobPoster);