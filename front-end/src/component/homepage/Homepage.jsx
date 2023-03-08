import React, { Component } from "react";
import "./homepage.css";
import Header from "../task/Header";
import Footer from "../task/Footer";
export default function Homepage() {
  return (
    <>
      <div className="homepage">
        <Header />
        <div className="containerHomepage">
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
                <i class="fa-solid fa-chevron-right"></i>
              </p>{" "}
            </div>
          </div>
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
          <div className="containerCalendar">
            <p className="open"> OPENING HOURS</p>
            <img src="images/imgHomepage/decor 1.png" alt="" />
            <div className="divCalendar">
              <div>
                {" "}
                <p>MON </p> <p className="smallTime">10:00-17:00</p>{" "}
              </div>
              <div>
                {" "}
                <p>TUE </p> <p className="smallTime">09:00-15:00</p>{" "}
              </div>
              <div>
                {" "}
                <p>WED </p> <p className="smallTime">10:00-20:00</p>{" "}
              </div>
              <div>
                {" "}
                <p>THU </p> <p className="smallTime">10:00-17:00</p>{" "}
              </div>
              <div>
                {" "}
                <p>SAT </p> <p className="smallTime">10:00-17:00</p>{" "}
              </div>
              <div>
                {" "}
                <p>FRI+SUN </p> <p className="smallTime">Closed</p>{" "}
              </div>
            </div>
            <p className="loremCalendar">
              {" "}
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Curabitur pellentesque neque eget diam.
            </p>
          </div>
          <div className="hairModel">
            <p> WHAT WE DO</p>
            <img src="images/imgHomepage/decor 1.png" alt="" />

            <div className="flexday">
              <div className="divHair">
                <div className="imgModel"> </div>
                <div className="detailHair">
                  <p> Trimming Bread</p>
                  <p> ━━━━━━━━━━━━━━━━━</p>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Curabitur pellentesque neque eget diam.
                  </p>
                  <div className="moneyHairModel1"> $123 </div>
                </div>
              </div>

              <div className="divHair">
                <div className="imgModel"> </div>
                <div className="detailHair">
                  <p> Trimming Bread</p>
                  <p> ━━━━━━━━━━━━━━━━━</p>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Curabitur pellentesque neque eget diam.
                  </p>
                  <div className="moneyHairModel2"> $123 </div>
                </div>
              </div>

              <div className="divHair">
                <div className="imgModel"> </div>
                <div className="detailHair">
                  <p> Trimming Bread</p>
                  <p> ━━━━━━━━━━━━━━━━━</p>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Curabitur pellentesque neque eget diam.
                  </p>
                  <div className="moneyHairModel3"> $123 </div>
                </div>
              </div>
            </div>
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
          <div className="personHair">
            <div className="personHairHot">
              <div className="leftAndRight2">
                <p>
                  <i className="fa-solid fa-angle-left"></i>{" "}
                </p>
                <p>
                  {" "}
                  <i class="fa-solid fa-chevron-right"></i>{" "}
                </p>
              </div>
            </div>
            <div className="priviewperson">
              <p> OUR BABRER</p>
              <img src="images/imgHomepage/decor 1.png" alt="" />
              <div className="detailPerson">
                <p className="namePerson"> Dao Hieu</p>
                <p className="onJob"> Owner & Babber</p>
                <div className="contentPriview">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur pellentesque neque eget diam posuere porta. Quisque
                  ut nulla at nunc lacinia. Proin adipiscing porta tellus, ut
                  feugiat nibh adipiscing sit amet. In eu justo a felis faucibus
                  ornare vel id metus. Vestibulum ante ipsum primis in faucibus
                  orci luctus et ultrices. Proin adipiscing porta tellus, ut
                  feugiat nibh adipiscing sit amet. In eu justo a felis faucibus
                  ornare vel id metus.{" "}
                </div>
                <p className="skin"> Make an Appoinment </p>
                <p className="telephoneMe">(123) 654-123 987</p>
                <p className="getgo">Get in Touch</p>
                <div>
                  {" "}
                  <img src="images/imgHomepage/Facebook.png" alt="" />{" "}
                  <img src="images/imgHomepage/Twitter (2).png" alt="" />{" "}
                  <img src="images/imgHomepage/Instagram (2).png" alt="" />{" "}
                </div>
              </div>
            </div>
          </div>
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
              <div className="howtoSales">
                <div className="sale1"> </div>
                <div className="sale2">
                  <div className="miniSale2">
                    <p> HOW TO CARE YOUR BEARD IN A WEEK</p>
                    <hr />
                    <p> Posted Februari 10, 2016 </p>
                    <p style={{ width: "330px" }}>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur pellentesque neque eget diam.
                    </p>
                    <p> Read More </p>
                  </div>
                </div>
              </div>

              <div className="sale3">
                <p> GET 20% CASHBACK FOR FIRST VISIT</p>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur pellentesque neque eget diam.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="brandRight">
            <p> OUR TOP BRANDS</p>
            <img src=" images/imgHomepage/decor 1.png" alt="" />
            <div className="logoBrand">
              {" "}
              <img src="images/imgHomepage/Client Logo 1.png" alt="" />{" "}
              <img src="images/imgHomepage/Client Logo 2.png" alt="" />{" "}
              <img src="images/imgHomepage/Client Logo 3.png" alt="" />{" "}
              <img src="images/imgHomepage/Client Logo 4.png" alt="" />{" "}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
