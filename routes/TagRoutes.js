const express = require("express");
const router = express.Router();

const TagController = require("../controllers/TagController");
router.post("/add_tag", TagController.addTag);
router.get("/get_tags", TagController.getTags);
router.put("/update_status/:id", TagController.updateStatus);

router
  .route("/:id")
  .get(TagController.getById)
  .patch(TagController.updateById)
  .delete(TagController.deleteById);

module.exports = router;