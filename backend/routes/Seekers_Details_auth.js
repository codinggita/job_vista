import express from 'express';
import Seekers_Details from '../models/Seekers_Details.js';
const router =express.Router();

// //create a new job seeker user 
// //post request ...
router.post('/newseeker',async(req,res)=>{
    try{
        const newseeker=await Seekers_Details.create(req.body);
        res.status(201).json(newseeker);
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:'internal server error'});
    }

});