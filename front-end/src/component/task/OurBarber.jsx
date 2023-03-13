import React, { Component } from 'react';
import "../homepage/homepage.css"
export default function OurBarber()  {
    return ( 
        <>
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
        </>
     );
}

 ;