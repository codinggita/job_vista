import React from 'react';
import { useLocation } from 'react-router-dom';
import '../css/Seekers_Apply.css';

function Seekers_Apply() {
  const location = useLocation();
  const {image, heading, duration, salary, location: jobLocation, skills, aboutjob, aboutrec } = location.state || {};


  return (
    <>
      <div className='display'>
        <div className='box1'>
          <div className='box2'>
            <img src={image}alt="imagee" />
            <h3>Company Name</h3>
          </div>
          <button type="button">Apply Now</button>
        </div>
        <hr />
        <div className='box3'>
          <h3>SDEI {heading}</h3>
          <p>Duration: {duration}</p>
          <p>Salary: {salary}</p>
          <p>Location: {jobLocation}</p>
          <p>Skills: {skills}</p>
        </div>
        <hr />
        <div className='box4'>
          <h3>Job Description</h3>
          {aboutjob}
        </div>
        <hr />
        <div className='box5'>
          <h3>Recruiter Information</h3>
          {aboutrec}
        </div>
      </div>
    </>
  )
}

export default Seekers_Apply;
