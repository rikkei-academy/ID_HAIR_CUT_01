import React, { Component } from "react";
import "./header.css";
export default function Header() {
  return (
    <>
      <div className="header">
        <div className="imgHeader">
          <img
            style={{ width: "122px", height: "80px" }}
            src="images/imgHomepage/logo 1.png"
            alt=""
          />
        </div>
        <div className="menuHeader">
          <div> HOME </div>
          <div> ABOUT US</div>
          <div> SERVICES</div>
          <div> GALLERY</div>
          <div> BLOG</div>
          <div> CONTACTUS</div>
        </div>
      </div>
    
    </>
  );
}
