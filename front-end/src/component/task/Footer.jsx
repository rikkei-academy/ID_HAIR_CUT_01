import React, { Component } from "react";

import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footerCenter">
          <img src="images/imgHomepage/logo 1.png" alt="" /> <br />
          <img src="images/imgHomepage/decor 1.png" alt="" />
          <p> info@yoursite.com</p>
          <div className="phone-footer"> (123) 654-123 987</div>
          <p>99 Park Jomblo Street,Panam, Pekanbaru, 28292, Riau</p>
          <div className="logoCall">
            <img
              className="image-footer"
              src="images/imgHomepage/facebook (1).png"
              alt=""
            />
            <img
              className="image-footer"
              src="images/imgHomepage/twitter.png"
              alt=""
            />
            <img
              className="image-footer"
              src="images/imgHomepage/instagram.png"
              alt=""
            />
            <img
              className="image-footer"
              src="images/imgHomepage/pinterest.png"
              alt=""
            />
            <img
              className="image-footer"
              src="images/imgHomepage/youtube.png"
              alt=""
            />
            <img
              className="image-footer"
              src="images/imgHomepage/google.png"
              alt=""
            />
          </div>
        </div>
        <div className="noteWhy">
          {" "}
          © Copyright Hobber 2016. All Rights Reserved. By Rometheme{" "}
        </div>
      </div>
    </>
  );
}
