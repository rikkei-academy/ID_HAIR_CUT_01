import React, { Component } from "react";
import Homepage from "../homepage/Homepage";
import "./header.css";
// import AboutUs from "../aboutus/AboutUs";
// import Service from "../service/Service";
// import OurGallery from "../ourgallery/OurGallery";
// import Blog from "../blog/Blog";
// import Contact from "../contact/Contact";

import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="imgHeader">
          <NavLink to="/">
            {" "}
            <img
              style={{ width: "122px", height: "80px" }}
              src="images/imgHomepage/logo 1.png"
              alt=""
            />
          </NavLink>
        </div>
        <div className="menuHeader">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/aboutus">ABOUT US</NavLink>
          <NavLink to="/service">SERVICES</NavLink>
          <NavLink to="/ourgallery">GALLERY</NavLink>
          <NavLink to="/blog">BLOG</NavLink>
          <NavLink to="/contactus">CONTACTUS</NavLink>
        </div>
      </div>
    </>
  );
}
