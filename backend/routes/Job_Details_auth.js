import express from 'express';
import Job_Details from '../models/Jobs_Details.js';
const router =express.Router();
//create a new job 
//post request ...
router.post('/newjob',async(req,res)=>{
    try{
        const newjob=await Job_Details.create(req.body);
        res.status(201).json(newjob);
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:'internal server error'});
    }

});


//get the jobs posted on the seeker home page..
//get request....

router.get('/seeker_home',async(req,res)=>{
    try{
        const jobs=await Job_Details.find();
        res.json(jobs);
    }
    catch(error){
        console.log('error',error);
        res.status.json({error:'internal server error'});
    }
});

//get the jobs posted on the rec dashboard

router.get('/company_home',async(req,res)=>{
    try{
        const jobs=await Job_Details.find();
        res.json(jobs);
    }
    catch(error){
        console.log('error',error);
        res.status.json({error:'internal server error'});
    }
});

//delete the job from a rec dashboard and database

router.delete('/company_home/delete/:jobid', async (req, res) => {
    try {
        const { jobid } = req.params; // Correctly accessing jobid parameter
        const deletedJob = await Job_Details.findByIdAndDelete(jobid);
        if (deletedJob) {
            res.status(200).json({ message: 'Data deleted.' });
        } else {
            res.status(404).json({ error: 'Data not found' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;