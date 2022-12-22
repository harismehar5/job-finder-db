const express = require("express");
const router = express.Router();

const BlogController = require("../controllers/BlogController");
router.post("/add_blog", BlogController.addBlog);
router.get("/get_blogs", BlogController.getBlogs);
router.get("/update_status/:id", BlogController.updateStatus);

router
  .route("/:id")
  .get(BlogController.getById)
  .patch(BlogController.updateById)
  .delete(BlogController.deleteById);

module.exports = router;