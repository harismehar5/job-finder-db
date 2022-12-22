const express = require("express");
const router = express.Router();

const JobSeekerController = require("../controllers/JobSeekerController");
router.post("/add_job_seeker", JobSeekerController.addJobSeeker);
router.get("/get_job_seekers", JobSeekerController.getJobSeekers);
router.get("/update_status/:id", JobSeekerController.updateStatus);

router
  .route("/:id")
  .get(JobSeekerController.getById)
  .patch(JobSeekerController.updateById)
  .delete(JobSeekerController.deleteById);

module.exports = router;