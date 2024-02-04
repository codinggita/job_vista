import React from 'react'
import '../css/Seekers_Apply.css'
function Seekers_Apply(props) {
  return (
    <>
    <div className='display'>
        <div className='box1'>
            <div className='box2'>
            <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWCZER?ver=1433&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true" alt="imagee" />
            <h3>Company Name</h3>
            </div>
            <button type="button">Apply Now</button>
        </div>
        <hr />
        <div className='box3'>
        <h3>SDEI{props.heading}</h3>
            <p>Duration:{props.duration}</p>
            <p>Salary:{props.salary}</p>
            <p>Location:{props.location}</p>
            <p>Skills:{props.skills}</p>
        </div>
        <hr />
        <div className='box4'>
            <h3>Job Description</h3>
            dfghjk{props.aboutjob}
        </div>
        <hr />
        <div className='box5'>
            <h3>Recruiter Information</h3>
            dfghjk{props.aboutrec}
        </div>

    </div>
    </>
  )
}

export default Seekers_Apply
