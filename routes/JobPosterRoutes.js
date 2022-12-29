const express = require("express");
const router = express.Router();

const JobPosterController = require("../controllers/JobPosterController");
router.post("/add_job_poster", JobPosterController.addJobPoster);
router.get("/get_job_posters", JobPosterController.getJobPosters);
router.put("/update_status/:id", JobPosterController.updateStatus);

router
  .route("/:id")
  .get(JobPosterController.getById)
  .patch(JobPosterController.updateById)
  .delete(JobPosterController.deleteById);

module.exports = router;