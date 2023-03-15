import React, { Component } from "react";
export default function ImgAboutUs(props) {
  let { name } = props;
  return (
    <>
      <div className="imgAboutUs">
        <div className="imgAboutUsMain">
          <div className="imgAboutUsMini">
            <p> {props.name} </p>
            <img src="images/imgHomepage/decor 1.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
