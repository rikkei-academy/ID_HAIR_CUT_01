import React, { Component } from "react";
import Footer from "../task/Footer";
import Header from "../task/Header";
import ImgAboutUs from "../task/ImgAboutUs";
import "./sigleblog.css";

export default function () {
  return (
    <>
      <div className="sigleBlog">
        <Header />
        <ImgAboutUs name="SINGLE BLOG" />
        <div className="sigleBlogContainer">
          <p className="howtoCutWeek"> HOW TO CARE YOUR BEARD IN A WEEK </p>
          <hr />
          <p className="newTimeUpdate"> Posted Februari 10, 2016 </p>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            consequatur inventore ex eveniet, iusto consequuntur voluptate,
            accusamus rerum placeat fuga labore libero perspiciatis nobis
            quaerat saepe necessitatibus, vero eum nihil. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Molestias tempore veniam,
            consequuntur et dolor quaerat veritatis facere explicabo suscipit a
            libero! Maiores at praesentium impedit assumenda, placeat non
            voluptas dolor.{" "}
          </p>
          <div className="imgSigleBlog"></div>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            impedit nesciunt consequatur voluptas. Reprehenderit sapiente, vel
            quam ullam molestiae maiores quas commodi obcaecati officiis ipsa
            eveniet asperiores ex, dolorum nihil?{" "}
          </p>
          <div className="divTalkTop">
            <div className="divHopTheTalkTop">
              <div className="divYellow"> </div>
              <div className="divTalkContent">
                <p>
                  {" "}
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id,
                  aspernatur necessitatibus iusto minus commodi quasi inventore
                  aut, cumque impedit ducimus obcaecati animi quia. Enim
                  placeat, earum aliquam aut pariatur eligendi?{" "}
                </p>
                <p> cocomoco </p>
              </div>
            </div>
          </div>
          <p className="ohyeah">
            {" "}
            Ultrices risus elit lectus nunc blandit quis
          </p>
          <p>
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit esse
            maiores ullam recusandae provident ab porro amet alias debitis quas!
            Voluptatibus dolores vitae iusto amet obcaecati iste ipsa minus
            corporis.
          </p>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            facilis culpa assumenda quasi omnis consectetur sequi aut cupiditate
            deleniti! Itaque sunt officia repudiandae quia voluptas hic alias
            quibusdam iure at?{" "}
          </p>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nisi
            neque possimus, corrupti maxime praesentium ipsa voluptatum dolorum
            magni reprehenderit cum architecto aut, alias delectus debitis
            quibusdam vitae maiores ipsam.{" "}
          </p>
          <div className="thisComment">
            <p className="newTimeUpdate">Auther </p> <hr />
            <div className="thisCommentDiv">
              <div className="imgAvatarComment"> </div>
              <div className="contentComment">
                <p className="newTimeUpdate"> Posted by Jonny Doel </p> <br />
                <p className="ruissia">
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                  consequatur?{" "}
                </p>
              </div>
            </div>
            <hr />
          </div>
          <div className="thisComment">
            <p className="newTimeUpdate">Comment </p> <hr />
            <div className="thisCommentDiv">
              <div className="imgAvatarComment"> </div>
              <div className="contentComment">
                <p className="newTimeUpdate"> Posted by Jonny Doel </p> <br />
                <p className="ruissia">
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                  consequatur?{" "}
                </p>
              </div>
            </div>
            <hr />
          </div>
          <div className="thisCommentDiv">
            <div className="imgAvatarComment"> </div>
            <div className="contentComment">
              <p className="newTimeUpdate"> Posted by Jonny Doel </p> <br />
              <p className="ruissia">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur?{" "}
              </p>
            </div>
          </div>{" "}
          <hr />{" "}
          <div className="thisCommentDiv">
            <div className="imgAvatarComment"> </div>
            <div className="contentComment">
              <p className="newTimeUpdate"> Posted by Jonny Doel </p> <br />
              <p className="ruissia">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur?{" "}
              </p>
            </div>
          </div>
          <hr />
          <div className="thisCommentDiv">
            <div className="imgAvatarComment"> </div>
            <div className="contentComment">
              <p className="newTimeUpdate"> Posted by Jonny Doel </p> <br />
              <p className="ruissia">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur?{" "}
              </p>
            </div>
          </div>
          <hr />
          <div>
            <p style={{ paddingBottom: "20px" }} className="newTimeUpdate">
              {" "}
              Leave a comment
            </p>
            <hr />
            <form className="formInput">
              <div className="input1">
                <input type="text" placeholder="Enter Name*" />
                <input type="text" placeholder="Enter Email" />
              </div>{" "}
              <br />
              <div className="input4">
                <input type="text" placeholder="Enter Your Website*" />
              </div>{" "}
              <br />
              <input
                className="input3"
                type="text"
                placeholder="Enter Your Message"
              />{" "}
              <br />
              <button className="buttonSendd">SEND A COMMENT</button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
