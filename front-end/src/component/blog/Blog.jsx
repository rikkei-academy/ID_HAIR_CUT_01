import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import DetailsSale from "../task/DetailsSale";
import Footer from "../task/Footer";
import Header from "../task/Header";
import HowtoSales from "../task/HowtoSale";
import ImgAboutUs from "../task/ImgAboutUs";

import "./blog.css";

export default function Blog() {
  return (
    <>
      <div className="Blog">
        <Header />
        <ImgAboutUs name="BLOG" />
        <NavLink to="/signblog">
          <div className="optionsSales">
            <div className="comboSales">
              <HowtoSales />
              <DetailsSale />
            </div>
            <br />
            <HowtoSales /> <br />
            <HowtoSales />
          </div>
        </NavLink>
        <Footer />
      </div>
    </>
  );
}
