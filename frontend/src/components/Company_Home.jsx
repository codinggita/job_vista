import React from 'react'
import Listings from './Listings'
import Avatar from 'react-avatar'
import { NavLink } from 'react-router-dom'
import Company_Dasboard from './Company_Dasboard'
function Company_Home() {
  return (
    <>
    <div className='dashboard'>
    <div className='dash'>
    <Avatar name="Albert" size={64} round />
    <h3>username</h3>
    <NavLink style={{textDecoration:'none',background:'rgb(25, 123, 25)',color:'white',borderRadius:'10px',padding:'0.5rem 1rem',margin:'1rem 0rem'}} to='apply'>New Job+</NavLink>
    <h4>Jobs Posted</h4>
    <ul>
        <li>open:5</li>
        <li>closed:3</li>
    </ul>
    <h4></h4>
    <h5>Listed since:2024</h5>
    </div>
    <div className='report'>
    <Company_Dasboard image='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWCZER?ver=1433&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true'duration='full time' location='Pune'salary='50K' skills='MERN' status='closed'color='orange'/>
    <Company_Dasboard image='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWCZER?ver=1433&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true'duration='full time' location='Pune'salary='50K' skills='MERN' status='closed'color='orange'/>
        <Company_Dasboard image='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWCZER?ver=1433&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true'duration='full time' location='Pune'salary='50K' skills='MERN' status='open'color=' rgb(8, 8, 187)'/>
    </div>
    </div>
    
    </>
  )
}

export default Company_Home
