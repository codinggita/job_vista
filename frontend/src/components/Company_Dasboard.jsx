import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
function Company_Dasboard(props) {
  const[deleted,setDeleted]=useState(false);
  const handleDelete=(jobid)=>{
    axios.delete(`http://localhost:8001/company_home/delete/${jobid}`)
    .then(()=>{
      console.log('job deleted');
      setDeleted(true);
    })
    .catch((error)=>{
      console.error('error in deleting',error)
    })
  }
  useEffect(()=>{
    if(deleted){
      window.location.reload();
    }
  })
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
    <img style={{height:'80px', marginBottom:'1rem'}} src={props.image} alt="" />
    <NavLink className='confirm' style={{backgroundColor:'red', textDecoration:'none'}} onClick={()=>handleDelete(props.id)}>Delete</NavLink>
    </div>
    </div>
   </>
  )
}

export default Company_Dasboard
