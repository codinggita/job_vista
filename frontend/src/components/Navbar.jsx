import React from 'react';
import imagePath from '../images/job_vista-high-resolution-logo.png';
import '../css/Navbar.css';
import {NavLink,BrowserRouter, Routes  } from 'react-router-dom';

function Navbar() {
  return (
    <>
        <div className='Navbar'>
         <NavLink to='/'> <img className='logo' src={imagePath} alt="Image description" /></NavLink>
          <div className='boxx'>
          <NavLink className="links" to='/'>Home</NavLink>
          <NavLink className="links" to="aboutus">About us</NavLink>
          <NavLink className="links" to="login_main">Login</NavLink>
          </div>
        </div>

    </>
  );
}

export default Navbar;