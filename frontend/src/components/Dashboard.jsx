import React from 'react'
import Avatar from 'react-avatar'
import'../css/Dashboard.css'
import Listings from './Listings'
function Dashboard() {
  return (
    <>
    <div className='dashboard'>
    <div className='dash'>
    <Avatar name="John Doe" size={64} round />
    <h3>username</h3>
    <h4>Skills</h4>
    <ul>
        <li>mern</li>
        <li>cpp</li>
    </ul>
    <h4>Qualifications</h4>
    <ul>
        <li>btech
        </li>
    </ul>
    <h5>Registered Jobs:10</h5>
    </div>
    <div className='report'>
        <Listings image='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWCZER?ver=1433&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true'duration='full time' location='Pune'salary='50K' skills='MERN'/>
        <Listings image='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWCZER?ver=1433&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true'duration='full time' location='Pune'salary='50K' skills='MERN'/>
        <Listings image='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWCZER?ver=1433&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true'duration='full time' location='Pune'salary='50K' skills='MERN'/>
    </div>
    </div>
    </>
  )
}

export default Dashboard
