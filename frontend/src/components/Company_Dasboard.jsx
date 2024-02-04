import React from 'react'
import { NavLink } from 'react-router-dom'
function Company_Dasboard(props) {
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
    <h5 className='confirm' style={{backgroundColor:`${props.color}`, margin:'1rem'}}>{props.status}</h5>
    <NavLink className='confirm' style={{backgroundColor:'red', margin:'1rem', textDecoration:'none'}}>Delete</NavLink>
    </div>
    </div>
   </>
  )
}

export default Company_Dasboard
