import React from 'react'
import{NavLink}from 'react-router-dom'
import '../css/Listings.css'
function Listings(props) {
  return (
   <>
   <div className='contanierr'>
    
        <div className='infoo'>
            <h3>{props.heading}</h3>
            <p>Duration:{props.duration}</p>
            <p>Salary:{props.salary}</p>
            <p>Location:{props.location}</p>
            <p>Skills:{props.skills}</p>
        </div>
        <div className='clogoo'>
        <img src={props.image} alt="" />
        <h5 className='confirm'>Registered</h5>
        </div>
        </div>
   </>
  )
}

export default Listings
