import React, { Component } from "react";
import "./homepage.css";
import Header from "../task/Header";
import Footer from "../task/Footer";
import TimeOnJob from "../task/TimeOnJob";
import OurBarber from "../task/OurBarber";
import OurTopBrand from "../task/OurTopBrand";
import BestSaleHair from "../task/BestSaleHair";
import HowtoSales from "../task/HowtoSale";
import DetailsSale from "../task/DetailsSale";
import DetailHot from "../task/DetailHot";

export default function Homepage() {
  return (
    <>
      <div className="homepage">
        <Header />
        <div className="containerHomepage">
         <DetailHot/>
          <div className="containerNews">
            <div className="imgNews">
              <img src="" alt="" />
            </div>
            <div className="taitleNews">
              <div>
                {" "}
                <p> WELCOME TO HIEUBER</p>
                <img src="images/imgHomepage/decor 1.png" alt="" />
              </div>
              <p className="lorem1Taitle">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur pellentesque neque eget diam posuere porta. Quisque ut
                nulla at nunc lacinia. Proin adipiscing porta tellus, ut feugiat
                nibh adipiscing sit amet. In eu justo a felis faucibus ornare
                vel id metus. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices. Proin adipiscing porta tellus, ut feugiat
                nibh adipiscing sit amet. In eu justo a felis faucibus ornare
                vel id metus{" "}
              </p>
              <p className="lorem2Taitle">
                "Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit
                amet. In eu justo a felis faucibus ornare vel id metus.
                Vestibulum ante ipsum primis".{" "}
              </p>
              <img src="images/imgHomepage/signature 1.png" alt="" /> <br />
              <img src="images/imgHomepage/Btn.png " alt="" />
            </div>
          </div>

          <TimeOnJob />

          <div className="hairModel">
            <p> WHAT WE DO</p>
            <img src="images/imgHomepage/decor 1.png" alt="" />

          <BestSaleHair/>
          </div>
          <div className="topHairStyle">
            <p style={{ color: "#fff" }}> TOP POPULAR STYLE</p>
            <img src="images/imgHomepage/decor 1.png" alt="" />
            <div className="hairHotImg">
              <div className="div1HairHotImg"> </div>
              <div className="div2HairHotImg"> </div>
              <div className="div3HairHotImg"> </div>
            </div>
            <p style={{ color: "#fff" }}>
              {" "}
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Curabitur pellentesque neque eget diam.
            </p>
          </div>
      
<OurBarber/>

          <div className="shareSkill">
            <p> HAPPY CUSTOMER</p>
            <img src="images/imgHomepage/decor 1.png" alt="" />
            <div className="statusShare">
              {" "}
              Pellentesque egestas turpis eget mauris elementum mollis. Vel ne
              integre vivendo. Ut cum essent facilisi scriptorem. Ut cum essent.{" "}
            </div>
            <div className="profileShareSkin">
              {" "}
              <img src="images/imgHomepage/comment02 1.png" alt="" />
              <p className="namePro"> Yohdu Yongu</p>
              <p> -custommer- </p>
            </div>
          </div>
          <div className="eventSales">
            <p> LATES NEW BLOG </p>
            <img src="images/imgHomepage/decor 1.png" alt="" />
            <div className="cardSales">
              <HowtoSales/>
              <DetailsSale/>
             
            </div>
          </div>
        <OurTopBrand/>
        </div>
        <Footer />
      </div>
    </>
  );
}
