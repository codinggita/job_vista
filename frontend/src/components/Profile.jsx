import React, { useRef, useState } from 'react';
import '../css/Profile.css';
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function Profile() {
  // const[newseeker,setNewSeeker]=useState({});
  //to update values
  // const handleChange=(e)=>{
  //   const{name,value}=e.target;
  //   setNewSeeker({...newseeker,[name]:value});
  // };
  //on submit
  // const handleSubmit=(e)=>{
  //   e.preventDefault();
  //   axios.post('https://job-vista.onrender.com/newseeker',newseeker)
  //   .then((response)=>{
  //     toast.success("Profile Updated!")
  //   })
  //   .catch((error)=>{
  //     console.log('error',error)
  //   });
  //   };
  return (
    <>
    <div className='bodyy'>
      <div className='profile'>
        <h1>Profile</h1>
        <form action="">
          <div className="form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input type="text" id="fullName" placeholder='Full Name' />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email ID:</label>
            <input type="email" id="email" />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="text" id="phoneNumber" />
          </div>

          <div className="form-group">
            <label>Gender</label>
            <input type="radio" name="gender" id="male" />
            <label htmlFor="male">Male</label>

            <input type="radio" name="gender" id="female" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="other" />
            <label htmlFor="other">Other</label>
          </div>

          <div className="form-group">
            <label htmlFor="education">Education</label>
            <select id="education">
              <option value="Btech">Btech</option>
              <option value="Bca">Bca</option>
              <option value="Bsc">Bsc</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="graduationDate">Date Of Graduation</label>
            <input type="date" id="graduationDate" />
          </div>

          <div className="form-group">
            <label>Skills</label>
            <input type="checkbox" id="mern" />
            <label htmlFor="mern">MERN</label>

            <input type="checkbox" id="react" />
            <label htmlFor="react">React</label>

            <input type="checkbox" id="node" />
            <label htmlFor="node">Node.js</label>

            <input type="checkbox" id="express" />
            <label htmlFor="express">Express</label>
          </div>

          <div className="form-group">
            <label htmlFor="resume">Resume</label>
            <input type="file" id="resume" />
          </div>

          <input className='profile-btn'  value="Submit" />
        </form>
      </div>
    </div>
    
  </>
  );
}

export default Profile;
