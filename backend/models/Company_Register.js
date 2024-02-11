import mongoose from "mongoose";
const Company_Register = new mongoose.Schema({
  company_name: String,
  email_address: String,
  phone_number:String,
  password:String
});


export default mongoose.model('Company_Register', Company_Register);