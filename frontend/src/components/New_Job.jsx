import React from 'react'
import'../css/New_Job.css'
function New_Job() {
  return (
   <>
   <div className='bodyy'>
   <form className="job-form">
      <h2>Job Posting Form</h2>

      <div className="form-group">
        <label htmlFor="companyName">Company Name:</label>
        <input type="text" id="companyName" name="companyName" required />
      </div>

      <div className="form-group">
        <label htmlFor="emailAddress">Email Address:</label>
        <input type="email" id="emailAddress" name="emailAddress" required />
      </div>

      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="tel" id="phoneNumber" name="phoneNumber" required />
      </div>

      <div className="form-group">
        <label htmlFor="companyLogoLink">Company Logo Link:</label>
        <input type="url" id="companyLogoLink" name="companyLogoLink" required />
      </div>

      <div className="form-group">
        <label htmlFor="jobTitle">Job Title:</label>
        <input type="text" id="jobTitle" name="jobTitle" required />
      </div>
      <div className="form-group">
        <label htmlFor="jobtype">Job Type:</label>
        <input type="text" id="jobTitle" name="jobtype" required />
      </div>
      <div className="form-group">
        <label htmlFor="salary">Salary:</label>
        <input type='text' id="jobTitle" name="salary" required />
      </div>

      <div className="form-group">
        <label htmlFor="requiredSkills">Required Skills:</label>
        <input type="text" id="requiredSkills" name="requiredSkills" required />
      </div>

      <div className="form-group">
        <label htmlFor="jobDescription">Job Description:</label>
        <textarea id="jobDescription" name="jobDescription" required></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="companyDescription">Company Description:</label>
        <textarea id="companyDescription" name="companyDescription" required></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
    </div>
   </>
  )
}

export default New_Job
