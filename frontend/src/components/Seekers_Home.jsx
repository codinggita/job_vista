import React from 'react'
import '../css/Seekers_Home.css'
import Seekers_Lists from './Seekers_Lists'
function Seekers_Home() {
  return (
    <>
    <div className='head'>
      <input type="text" name="" id="" placeholder='Search Here!' />
      <h2>"Job hunting simplified-find, apply, thrive."</h2>
    </div>
    <div className='main-body'>
      <div className='filters'>hiii</div>
      <div className='list'>
        <Seekers_Lists/>
        <Seekers_Lists/>

      </div>
    </div>
    </>
  )
}

export default Seekers_Home
