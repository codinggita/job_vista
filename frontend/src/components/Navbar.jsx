import React, { createContext, useContext, useState } from 'react';
import imagePath from '../images/job_vista-high-resolution-logo.png';
import '../css/Navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';
const LoginContext=createContext();

function Navbar() {
  const[isLoggedin,setisLoggedin]=useState(false);
  return (
    <LoginContext.Provider value={[isLoggedin,setisLoggedin]}>
      <div className='Navbar'>
        <NavLink to='/'>
          <img className='logo' src={imagePath} alt="Image description" />
        </NavLink>
        <div className='boxx'>
          <NavLink className="links" to='/'>Home</NavLink>
          <NavLink className="links" to="aboutus">About us</NavLink>
          <NavLink className="links" to="contactus">Contact us</NavLink>
              <NavLink className="links" to="profile">Profile</NavLink>
              <NavLink className="links" to="dashboard">Dashboard</NavLink>
            <NavLink className="links" to="login_main" >Login</NavLink>
        </div>
      </div>
    </LoginContext.Provider>
  );
}

export default Navbar;
