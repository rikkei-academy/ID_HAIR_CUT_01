import React, { Component } from 'react';
import Footer from '../task/Footer';
import Header from '../task/Header';
import ImgAboutUs from '../task/ImgAboutUs';
import "./contact.css"
export default function Contact() {
    return (
    <> 
    <div className='contact'>
        <Header/>
        <ImgAboutUs />
        <div className='imgMaps'>

            <div className='buttonToNho'>
             <img src="images/imgHomepage/+.png" alt="" /><br />
             <img src="images/imgHomepage/-.png" alt="" />   
             </div>

        </div>
        <div className='contacForm'>
            <p> CONTACT FORM</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt beatae consequuntur</p>
            <form className='formInput' >
                <div className='input1'>
                    <input type="text" placeholder='Enter Name*' />
                    <input type="text"  placeholder='Enter Email'/>
                </div> <br />
                <div className='input2'> 
                    <input type="text" placeholder='Subject*' />
                    <input type="text" placeholder='Enter Phone Number*' />
                </div> <br />
                <input className='input3' type="text"  placeholder='Enter Your Message'/> <br />
                <button className='buttonSend'>SEND A COMMENT</button> 


            </form>

        </div>
        <Footer/>

    </div>
    </> 
     );
}
