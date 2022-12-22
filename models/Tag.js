const mongoose = require("mongoose");

const Tag = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Tag name is missing"],
    maxlength: [30, "Tag name cannot exceed 255 char"],
  },
  is_active: {
    type: Boolean,
    required: true,
    default: true,
  },
});

module.exports = mongoose.model("Tag", Tag);
