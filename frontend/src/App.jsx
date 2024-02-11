import React, { createContext, useState, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from './components/Navbar';
import Main_Page from './components/Main_Page';
import Footer from './components/Footer';
import Login_Main from './components/Login_Main';
import For_Company from './components/For_Company';
import Company_Home from './components/Company_Home';
import For_Seekers from './components/For_Seekers';
import Company_Login from './components/Company_Login';
import Seekers_Login from './components/Seekers_Login';
import Seekers_Home from './components/Seekers_Home';
import Aboutus from './components/Aboutus';
import Seekers_Apply from './components/Seekers_Apply';
import Apply from './components/Apply';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import New_Job from './components/New_Job';
import ContactUs from './components/ContactUs';
import Update_Job from './components/Update_Job';

// Creating the LoginContext with initial state of 'false'
const LoginContext = createContext();

function App() {
  const [login, setLogin] = useState(false); // Initial login state is 'false'

  return (

     <LoginContext.Provider value={{ login, setLogin }}>
     <Navbar/>
     <Routes>

      <Route path="/"element={<Main_Page/>}/>
      <Route path='/aboutus'element={<Aboutus/>}/>
      <Route path='/contactus'element={<ContactUs/>}/>
      <Route path='/login_main'element={<Login_Main/>}/>
      <Route path='/login_main/ forcompanies' element={<For_Company/>}/>
      <Route path='/login_main/forseekers' element={<For_Seekers/>}/>
      <Route path='/login_main/forseekerss' element={<Seekers_Login/>}/>
      <Route path='/login_main/ forcompaniess' element={<Company_Login/>}/>
      <Route path='/company_home' element={<Company_Home/>}/>
      <Route path='/seeker_home' element={<Seekers_Home/>}/>
      <Route path='/seeker_home/jobapply'  element={<Seekers_Apply/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/company_home/newjob' element={<New_Job/>}/>
      <Route path='/company_home/updatejob/:id' element={<Update_Job/>}/>
    
     </Routes>
     <Footer/>
     </LoginContext.Provider>
  )
}

export default App
