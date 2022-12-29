const Blog = require("../models/Blog");
const cloudinary = require("../middleware/cloudinary");

exports.addBlog = async (req, res) => {
  const data = JSON.parse(req.body.data);
  const result = await cloudinary.uploader.upload(req.file.path);

  const blog = new Blog({
    title: data.title,
    description: data.description,
    tags: data.tags,
    feature_image: result.url,
  });
  try {
    const response = await blog.save();
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

exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    if (blogs.length !== 0) {
      res.status(200).json({ error: false, blogs: blogs });
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
    const response = await Blog.findById(req.params.id);
    res.status(200).json({ error: false, blog: response });
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
    const data = JSON.parse(req.body.data);
    const result = await cloudinary.uploader.upload(req.file.path);
    const response = await Blog.updateOne(
      { _id: req.params.id },
      {
        $set: {
          title: data.title,
          description: data.description,
          tags: data.tags,
          feature_image: result.url,
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
    const response = await Blog.deleteOne({ _id: req.params.id });
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
