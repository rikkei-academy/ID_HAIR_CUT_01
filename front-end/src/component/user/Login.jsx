import React, { Component } from "react";
import "./login.css";

export default function Login() {
  return (
    <>
      <div className="login">
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
                <p className="hello">Hello Again!</p>
                <p>Welcome Back</p>
              </div>
              <form className="formloginMiniInput">
                <input type="text" placeholder="Email Address"/>{" "}
                <div className="divTaitleInput1" >
              <i class="fa-regular fa-envelope"></i>
                </div>
                <br />
                <input type="text" placeholder="Password"/>{" "}
                <div className="divTaitleInput2">
                <i className="fa-solid fa-lock"></i>
                </div>
                <div className="loginNe"> Login</div> <br />
                <p className="forgotPasswordText"> Forgot Password </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
