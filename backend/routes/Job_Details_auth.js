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
//update a job
//put request...
router.put('/updatejob/:id',async(req,res)=>{
    try{
        const id=req.params.id;
        const Data=req.body;
        const updateData=await Job_Details.findByIdAndUpdate(id,Data,{new:true});
        if(updateData){
            res.json({message:'Job Updated'});
        }
        else{
            res.status(404).json({message:'Job not found'});
        }
    }
        catch(error){
            console.error(error);
            res.status(500).json({message:'error in updating'})
        }
});

//get the jobs posted on the seeker home page..
//get request....

router.get('/seeker_home',async(req,res)=>{
    try {
        const { salary, location, jobType, company } = req.query;
    
        // Prepare query object based on filters
        const query = {};
        if (salary) query.salary = salary;
        if (location) query.location = location;
        if (jobType) query.jobType = jobType;
        if (company) query.company = company;
    
        // Fetch jobs from MongoDB based on filters
        const jobs = await Job_Details.find(query);
        
        res.json(jobs);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        res.status(500).json({ error: 'Internal Server Error' });
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
        res.status(500).json({error:'internal server error'});
    }
});

//get details of a job using id 
router.get('/company_home/updatejob/:jobid', async (req, res) => {
    const jobId = req.params.jobid;
    try{
        const jobDesc = await Job_Details.findById(jobId);
        return res.status(200).json(jobDesc);
    }
    catch(err){
        res.status(500).json({message: "Internal server error"});
    }

    console.log(jobDesc);

    //      (err, job) => {
    //   if (err) {
    //     console.error('Error finding job:', err);
    //     return res.status(500).json({ error: 'Internal Server Error' });
    //   }
  
    //   if (!job) {
    //     return res.status(404).json({ error: 'Job not found' });
    //   }
  
    //   // If job is found, send it as a response
    //   res.json(job);
//     });
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