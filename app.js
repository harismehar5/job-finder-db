const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
require("dotenv").config();
var cors = require("cors");
const path = require("path");

const jobRouter = require("./routes/JobRoutes");
const jobSeekerRouter = require("./routes/JobSeekerRoutes");
const jobPosterRouter = require("./routes/JobPosterRoutes");
const blogRouter = require("./routes/BlogRoutes");
const tagRouter = require("./routes/TagRoutes");
const ratingRouter = require("./routes/RatingRoutes");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

console.log("Database url", process.env.DATABASE_URL);
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const conn = mongoose.connection;
conn.on("open", function () {
  console.log("connected...");
});

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + path.extname(file.originalname));
  },
});

app.use(multer({ storage }).single("image"));

app.use("/job", jobRouter);
app.use("/job_poster", jobPosterRouter);
app.use("/job_seeker", jobSeekerRouter);
app.use("/blog", blogRouter);
app.use("/tag", tagRouter);
app.use("/rating", ratingRouter);

app.all("*", (req, res) => {
  res.status(404).send("<h1>404! Page not found</h1>");
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
