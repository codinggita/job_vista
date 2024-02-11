import mongoose from "mongoose";
const Seekers_Register = new mongoose.Schema({
  company_name: String,
  email_address: String,
  phone_number:String,
  password:String
});


export default mongoose.model('Seekers_Register', Seekers_Register);