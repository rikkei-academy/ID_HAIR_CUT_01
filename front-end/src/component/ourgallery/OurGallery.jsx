import React, { Component } from "react";
import Footer from "../task/Footer";
import Header from "../task/Header";
import ImgAboutUs from "../task/ImgAboutUs";

import "./ourgallery.css";

export default function OurGallery() {
  return (
    <>
      <div className="OurGallery">
        <Header />
        <ImgAboutUs name="OUR GALLERY" />
        <div className="OurGalleryModalHair">
          <div className="divMenuHair">
            <div className="buttonOptions"> Hair Styles </div>
            <div className="buttonOptions">Beard Styles </div>
            <div className="buttonOptions"> Colour Styles </div>
          </div>
          <div className="grid-container">
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
