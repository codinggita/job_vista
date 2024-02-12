import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import'../css/New_Job.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {ToastContainer,toast}from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function Update_Job() {

    const {id} = useParams();
    const navigate = useNavigate();
    const[newJob,setNewJob]=useState({
      company_name:'',
      email_address: '',
      phone_number: '',
      company_logo_link:'',
      job_title:'',
      salary:'',
      location:'',
      requiredskills:'',
      job_type:'',
      job_description:'',
      about_rec:''
  
    });
  //to get the already stored details of the job
  useEffect( () => {
    axios.get(`https://job-vista.onrender.com/company_home/updatejob/${id}`).then(response=>{
      //console.log(response.data);
      setNewJob(response.data);


    })
    .catch(error=>{
      console.error('error is fetching data',error);
    })
  }, []);

  //to update the statevalues 
  const handleChange=(e)=>{
    const{name,value}=e.target;
    setNewJob({...newJob,[name]:value});
  };
  //on form submit
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.put(`https://job-vista.onrender.com/updatejob/${id}`,newJob)
    .then((response)=>{
      toast.success("Job Updated Successfully!",{
        autoClose: 5000,
        onClose: () => navigate('/company_home')
      });
      
    })
    .catch((error) => {
      console.log('error',error)
    });
  };
  return (
    <>
   <ToastContainer/>
   <div className='bodyy'>
   <form className="job-form" onSubmit={handleSubmit}>
      <h2>Job Posting Form</h2>

      <div className="form-group">
        <label htmlFor="companyname">Comapny Name:</label>
        <input type="text" id="companyname" name="company_name" required onChange={handleChange} value={newJob.company_name} />
      </div>

      <div className="form-group">
        <label htmlFor="emailAddress">Email Address:</label>
        <input type="email" id="emailAddress" name="email_address" required onChange={handleChange} value={newJob.email_address} />
      </div>

      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="tel" id="phoneNumber" name="phoneNumber" required onChange={handleChange} value={newJob.phone_number}/>
      </div>

      <div className="form-group">
        <label htmlFor="companyLogoLink">Company Logo Link:</label>
        <input type="url" id="companyLogoLink" name="company_logo_link" required value={newJob.company_logo_link} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="loaction">Location:</label>
        <input type="text" id="location" name="location" required  onChange={handleChange} value={newJob.location}/>
      </div>
      <div className="form-group">
        <label htmlFor="jobTitle">Job Title:</label>
        <input type="text" id="jobTitle" name="job_title" required  onChange={handleChange} value={newJob.job_title}/>
      </div>
      <div className="form-group">
        <label htmlFor="jobtype">Job Type:</label>
        <input type="text" id="jobType" name="job_type" required onChange={handleChange} value={newJob.job_type} />
      </div>
      <div className="form-group">
        <label htmlFor="salary">Salary:</label>
        <input type='text' id="salary" name="salary" required onChange={handleChange} value={newJob.salary}/>
      </div>

      <div className="form-group">
        <label htmlFor="requiredSkills">Required Skills:</label>
        <input type="text" id="requiredSkills" name="requiredskills" required onChange={handleChange} value={newJob.requiredskills} />
      </div>

      <div className="form-group">
        <label htmlFor="jobDescription">Job Description:</label>
        <textarea id="jobDescription" name="job_description" required onChange={handleChange} value={newJob.job_description}></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="companyDescription">Company Description:</label>
        <textarea id="companyDescription" name="about_rec" required onChange={handleChange} value={newJob.about_rec}></textarea>
      </div>

      <button type="submit">Update Job</button>
    </form>
    </div>
      
    </>
  )
}

export default Update_Job
