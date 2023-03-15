import React, { Component } from 'react';
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";


export default function DetailHot () {
    return ( <>
    
          <div className="sliderShop">
            <p className="welcometo"> WELCOME TO</p>
            <p className="hieubarber"> HIEU BABERSHOP </p>
            <p className="forreal">FOR REAL MEN’S </p>
            <p className="lorem">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod
            </p>
            <div className="leftAndRight1">
              {" "}
              <p>
                {" "}
                <i className="fa-solid fa-angle-left"></i>
              </p>{" "}
              <p>
                <i className="fa-solid fa-chevron-right"></i>
              </p>{" "}
            </div>
          </div>
    </> );
}
