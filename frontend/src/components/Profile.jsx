import React from 'react'
import'../css/Profile.css'
function Profile() {
  return (
    <>
    <div className='profile'>
        <h1>Profile</h1>
        <form action="">
            <label htmlFor="">FullName:</label>
            <input type="text" name="" id="" placeholder='full name' /><br/>
            <label htmlFor="">Email ID:</label>
            <input type="email" name="" id="" /><br/>
            <label htmlFor="">Phone Number</label>
            <input type="text" name="" id="" /><br/>
            <label htmlFor="">Gender</label>
            <input type="radio" name="gender" id="1" />Male
            <input type="radio" name="gender" id='2' />Female<br/>
            <label htmlFor="">Eduction</label>
            <select id="myDropdown">
            <option value="option1">Btech</option>
            <option value="option2">Bca</option>
            <option value="option3">Bsc</option>
            </select><br/>
            <label htmlFor="">Date Of Graduation</label>
            <input type="date" name="" id="" /><br/>
            <label htmlFor="">Skills</label>
            <input type="checkbox" name="" id="" />Mern
            <input type="checkbox" name="" id="" />Mern
            <input type="checkbox" name="" id="" />Mern
            <input type="checkbox" name="" id="" />Mern<br/>
            <label htmlFor="">Resume</label>
            <input type="file" name="" id="" /><br/>
            <input type="submit" value="Submit" />
            
        </form>
    </div>
    </>
  )
}

export default Profile
