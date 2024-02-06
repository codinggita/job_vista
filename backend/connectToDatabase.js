import mongoose from "mongoose";
const uri='mongodb+srv://varshadagar:8IDNLNyYXhSBY5Dq@cluster0.vglrv1p.mongodb.net/jobvista';


mongoose.connect(uri)
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));
