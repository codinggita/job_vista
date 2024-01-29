import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Login.css'
function Login(props) {
  const backgroundColor=props.color;
  const fontcolor=props.fontcolor;
  return (
    <>
    <div className='box'style={{backgroundColor}}>
        <div className='inner1' style={{color:fontcolor}}>
            <h1>{props.user}</h1>
            <h4>{props.tagline}</h4>
        </div>
        <div className='inner2'>
            <NavLink className="btn-login" style={{background:fontcolor, color:backgroundColor}} to="/">Login</NavLink>
            <p style={{color:fontcolor}}>Didn't have an account?<NavLink style={{color:'blue'}}to="/">Signup</NavLink></p>
        </div>
    </div>
    </>
  )
}

export default Login
