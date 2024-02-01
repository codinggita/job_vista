import mongoose from "mongoose";
const uri='mongodb+srv://varshadagar:8IDNLNyYXhSBY5Dq@cluster0.vglrv1p.mongodb.net';
const connectToDatabase=async()=>{
    try{
        await mongoose.connect(uri);
        console.log("db connected...");
    }
    catch(error){
        console.log(error);
    }
};
 module.exports=connectToDatabase;