import React from 'react'
import Listings from './Listings'
import Avatar from 'react-avatar'
import { NavLink } from 'react-router-dom'
import Company_Dasboard from './Company_Dasboard'
import { useState,useEffect } from 'react'
import axios from 'axios'
function Company_Home() {

  const[Jobs,setJobs]=useState([]);
  useEffect(()=>{
    axios.get('https://job-vista.onrender.com/company_home')
    .then((response)=>
      setJobs(response.data))
    .catch((error)=>console.error('error in fetching jobs:',error));
  },[]);
  return (
    <>
    <div className='dashboard'>
    <div className='dash'>
    <Avatar name="Albert" size={64} round />
    <h3>username</h3>
    <NavLink style={{textDecoration:'none',background:'rgb(25, 123, 25)',color:'white',borderRadius:'10px',padding:'0.5rem 1rem',margin:'1rem 0rem'}} to='newjob'>New Job+</NavLink>
    <h4>Jobs Posted</h4>
    <ul>
        <li>open:5</li>
        <li>closed:3</li>
    </ul>
    <h4></h4>
    <h5>Listed since:2024</h5>
    </div>
    <div className='report'>
    {Jobs.map((job, index) => (
          <Company_Dasboard
            key={index}
            heading={job.job_title}
            image={job.company_logo_link}
            duration={job.job_type}
            location={job.location}
            salary={job.salary}
            skills={job.requiredskills}
            id={job._id}
          />
        ))}

    </div>
    </div>
    
    </>
  )
}

export default Company_Home
