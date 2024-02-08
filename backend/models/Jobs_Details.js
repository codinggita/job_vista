import mongoose from "mongoose";
const Jobs_Details = new mongoose.Schema({
  company_name: String,
  email_address: String,
  phone_number: String,
  company_logo_link: String,
  job_title: String,
  location:String,
  salary: String,
  requiredskills:String,
  job_type: String,
  job_description: String,
  about_rec: String
});


export default mongoose.model('Job_Details', Jobs_Details);

