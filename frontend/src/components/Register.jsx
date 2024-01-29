import React from 'react'

function Register() {
    const uri=props.image;
    const user=props.user;
    const eimg=props.eimg;
    const userimg=props.userimg;
    const phimg=props.phimg;
    const passimg=props.passimg;

  return (
   <>
   <div>
    <img src="uri" alt="" srcset="" />
   </div>
    <div>
        <div>
            <input type="text" placeholder='user' />
            <img src="" alt="" />
        </div>
        <div>
            <input type="email" placeholder='Email' />
            <img src="" alt="" />
        </div>
        <div>
            <input type="number" placeholder='Phone Number' />
            <img src="" alt="" />
        </div>
        <div>
            <input type="password" placeholder='Password' />
            <img src="" alt="" />
        </div>
    </div>
   </>
  )
}

export default Register
