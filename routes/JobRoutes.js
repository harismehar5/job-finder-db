const express = require("express");
const router = express.Router();

const JobController = require("../controllers/JobController");
router.post("/add_job", JobController.addJob);
router.get("/get_jobs", JobController.getJobs);
router.put("/update_status/:id", JobController.updateStatus);

router
  .route("/:id")
  .get(JobController.getById)
  .patch(JobController.updateById)
  .delete(JobController.deleteById);

module.exports = router;
