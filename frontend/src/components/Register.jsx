import React from 'react'
import '../css/Register.css'
import { useNavigate } from 'react-router-dom';
function Register(props) {
    const user=props.user;
    const eimg=props.eimg;
    const userimg=props.userimg;
    const phimg=props.phimg;
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
    navigate(direct);
  };

  return (
   <>
  <div className="main" style={{ backgroundImage: `url(${mainimg})`}}>
   
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
            <input type="text" placeholder='Phone Number' />
            <img src={phimg} alt="" />
        </div>
        <div>
            <input type="password" placeholder='Password' />
            <img src={passimg} alt="" />
        </div>
        <button className='btn-register' type="submit"onClick={handleClick} on>Register</button>

    </div>
    </div>
   </>
  )
}

export default Register
