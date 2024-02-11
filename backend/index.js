import express from 'express';
import New_Job from './routes/Job_Details_auth.js'
import Register from'./routes/Company_Register_auth.js'
const app = express();
import cors from 'cors';
app.use(cors());
const port = 8001;
import mongoose from "mongoose";
const uri='mongodb+srv://varshadagar:8IDNLNyYXhSBY5Dq@cluster0.vglrv1p.mongodb.net/jobvista';


mongoose.connect(uri)
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));

app.use(express.json());
app.use('',New_Job);
app.use('',Register);
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

