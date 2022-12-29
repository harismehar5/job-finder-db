const cloudinary = require("cloudinary");
const dotenv = require("dotenv");

dotenv.config();

cloudinary.config({ 
  cloud_name: 'codembeded', 
  api_key: '722262449942597', 
  api_secret: '42OXjwmbco8YX7mKTDjtTrX3joM' 
});
module.exports = cloudinary;
