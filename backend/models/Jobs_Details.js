import mongoose from "mongoose";
const Jobs_Details = new mongoose.Schema({
  company_name: String,
  company_logo_link: String,
  job_title: String,
  salary: {
    range: {
      min: Number,
      max: Number
    },
    currency: String,
    frequency: String
  },
  job_type: String,
  job_description: String,
  about_rec: {
    name: String,
    title: String,
    email: String,
    phone: String
  }
});

module.exports = mongoose.model('Job_Details', Jobs_Details);
