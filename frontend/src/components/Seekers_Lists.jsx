import React from 'react'
import '../css/Seekers_List.css'
import{NavLink}from 'react-router-dom'
function Seekers_Lists(props) {
  return (
    <>
    <div className='contanier'>
        <div className='info'>
            <h3>{props.heading}</h3>
            <p>Duration:{props.duration}</p>
            <p>Salary:{props.salary}</p>
            <p>Location:{props.location}</p>
            <p>Skills:{props.skills}</p>
            
        </div>
        <div className='clogo'>
        <img src={props.image} alt="" />
        <NavLink className='apply' to={{pathname:'jobapply',state:props}}>Apply Now
        </NavLink>
        </div>
    </div>
    </>
  )
}

export default Seekers_Lists
