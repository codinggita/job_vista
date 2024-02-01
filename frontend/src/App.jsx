import React from 'react'
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types'
import Navbar from './components/Navbar';
import Main_Page from './components/Main_Page'
import Footer from './components/Footer';
import Login_Main from './components/Login_Main';
function App() {
  return (
     <>
     <Navbar/>
     <Routes>
      <Route path="/"element={<Main_Page/>}/>
      <Route path='/Login_Main'element={<Login_Main/>}/>
     </Routes>
     </>
  )
}

export default App
