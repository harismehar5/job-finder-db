const mongoose = require("mongoose");
const tag = require("./Tag");

const Blog = new mongoose.Schema(
  {
    feature_image: {
      type: String,
      required: [true, "Feature image is missing"],
    },
    title: {
      type: String,
      required: [true, "Blog title is missing"],
    },
    description: {
      type: String,
      required: [true, "Blog description is missing"],
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

module.exports = mongoose.model("Blog", Blog);
