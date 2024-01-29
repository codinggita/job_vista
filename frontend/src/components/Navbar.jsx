import React from 'react';
import imagePath from '../images/job_vista-high-resolution-logo.png';
import '../css/Navbar.css';
import {NavLink,BrowserRouter, Routes  } from 'react-router-dom';

function Navbar() {
  return (
    <>
        <div className='Navbar'>
          <img className='logo' src={imagePath} alt="Image description" />
          <NavLink className="links" to="Login_Main">Login</NavLink>
        </div>

    </>
  );
}

export default Navbar;
