const express = require("express");
const router = express.Router();

const RatingController = require("../controllers/RatingController");
router.post("/add_rating", RatingController.addRating);
router.get("/get_ratings", RatingController.getRatings);
// router.get("/update_status/:id", RatingController.);

router
  .route("/:id")
  .get(RatingController.getById)
  .patch(RatingController.updateById)
  .delete(RatingController.deleteById);

module.exports = router;