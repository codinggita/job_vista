import React from 'react'
import '../css/Register.css'
import { useNavigate } from 'react-router-dom';
//import{useState,createContext,useContext}from'react';
function Login_End(props) {
    //const login=useContext();
    const user=props.user;
    const eimg=props.eimg;
    const userimg=props.userimg;
    const passimg=props.passimg;
    const mainimg=props.image;
    var direct;
    if(user=="Company Name"){
        console.log("yes");
        direct="/company_home";
    }
    else{
        direct="/seeker_home";
    }

    const navigate = useNavigate();

  const handleClick = () => {
    // Pass the target page path (e.g., "/new-page") to `navigate`
    //setLoggedin
    navigate(direct);
  };

  return (
    <>
        <div className="main" style={{ backgroundImage: `url(${mainimg})`, transform:`rotate(-0deg)`, boxShadow:'2px 3px 5px grey'}}>
   
   <div className='form'>
       <h3 style={{color:"black", fontSize:"1.2rem"}}>{props.tagline}</h3>
       <div>
           <input type="text" placeholder={user} />
           <img src={userimg} alt="" />
       </div>
       <div>
           <input type="email" placeholder='Email' />
           <img src={eimg} alt="" />
       </div>
       <div>
           <input type="password" placeholder='Password' />
           <img src={passimg} alt="" />
       </div>
       <button className='btn-register' type="submit"onClick={handleClick} on>Login</button>

   </div>
   </div>
    </>
  )
}

export default Login_End
