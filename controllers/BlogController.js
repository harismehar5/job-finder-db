const Blog = require("../models/Blog");

exports.addBlog = async (req, res) => {
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
  const blog = new Blog({
    feature_image: req.body.job_seeker_id,
    title: req.body.job_poster_id,
    description: req.body.job_id,
    tags: req.body.tags_list,
    is_active: req.body.job_seeker_Blog,
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
    const response = await Blog.updateOne(
      { _id: req.params.id },
      {
        $set: {
          feature_image: req.body.job_seeker_id,
          title: req.body.job_poster_id,
          description: req.body.job_id,
          tags: req.body.tags_list,
          is_active: req.body.job_seeker_Blog,
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
