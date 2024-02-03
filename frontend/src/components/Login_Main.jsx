import React from 'react'
import Login from './Login'
import '../css/Login_Main.css'
function Login_Main() {
  return (
    <div className='mainn'>
      <Login user=" ForCompanies" tagline='"Your openings,our opportunities."' color="white" fontcolor="#9A639F"/>
      <Login user="ForSeekers" tagline='"Job hunting simplified-find,apply,thrive."'color="#9A639F" fontcolor="white"/>
    </div>
  )
}

export default Login_Main
