import React, { Component } from 'react';
import Homepage from './component/homepage/Homepage';
import AboutUs from './component/aboutus/AboutUs';
import Service from './component/service/Service';
import OurGallery from './component/ourgallery/OurGallery';
import Blog from './component/blog/Blog';
import Contact from './component/contact/Contact';
import Register from './component/user/Register';
import Login from './component/user/Login';
import SigleBlog from './component/sigleblog/SigleBlog';
import {Routes, Route} from "react-router-dom" 
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage /> } /> 
      <Route path='/aboutus' element={<AboutUs /> } /> 
      <Route path='/service' element={<Service /> } /> 
      <Route path='/ourgallery' element={<OurGallery /> } /> 
      <Route path='/blog' element={<Blog /> } /> 
      <Route path='/contactus' element={<Contact /> } /> 
     <Route  path='/signblog' element={<SigleBlog/>}/>

      
    </Routes>
      {/* <Login/> */}

      {/* <SigleBlog/> */}
      

    </>
  );
}

export default App;
