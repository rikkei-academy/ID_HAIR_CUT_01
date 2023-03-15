import React, { Component } from 'react';
import "./register.css"
export default function Register () {
    return (  
        <>
      <div className="register">
        <div className="loginMini">
          <div className="divtaitleLogin">
            <div className="divtaitleLoginMini">
              <p className="go">Go HieuBerShop</p>
              <p className="themore">the most Barber vip pro wourld</p>
              <p className="readmoreLogin"> Read More</p>
            </div>
            <div className="divtaitleLoginMiniImg"> 
            <img width="330px" src="images/imgHomepage/Group 2.png" alt="" />

            </div>
          </div>
          <div className="formLogin">
            <div className="formLoginMini">
              <div className="taitleFormLogin">
                <p className="hello">Hello !</p>
                <p>Sign up to Get Start</p>
              </div>
              <form className="formloginMiniInput">
              <input type="text" placeholder="Full Name"/>{" "}
                <div className="divTaitleInput1" >
                <i class="fa-regular fa-envelope"></i>    
                </div> <br />
                <input type="text" placeholder="Email Address"/>{" "}
                <div className="divTaitleInput2" >
                <i className="fa-solid fa-user"></i> 
                </div>
                <br />
                <input type="text" placeholder="Password"/>{" "}
                <div className="divTaitleInput3">
                <i className="fa-solid fa-lock"></i>
                </div>
                <div className="loginNe"> Register  </div> <br />
              </form>
            </div>
          </div>
        </div>
      </div>
        </>
    );
}
