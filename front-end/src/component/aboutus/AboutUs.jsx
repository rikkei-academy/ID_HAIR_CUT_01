import React, { Component } from 'react';
import "./aboutUs.css"
import Header from '../task/Header';
import TimeOnJob from '../task/TimeOnJob';
import OurBarber from '../task/OurBarber';
import OurTopBrand from '../task/OurTopBrand';
import Footer from '../task/Footer';
import ImgAboutUs from '../task/ImgAboutUs';

export default function AboutUs () {
    return (
        <>
        <div className='AboutUs'> 
            <Header/>
                 <ImgAboutUs/>
            <div className='hotAbout'> 
                    <div className='priviewHotBarberAbout'> 
                        <div className='detailBarberAbout'> 
                            <p className='promiseBarber'>  Hobber Barber Shop Since 1990</p>
                            <p className='contentMo'> Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. 
                                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices. </p> <br />
                            

                               <p className='contentMo' > &emsp Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta.
                                Quisque ut nulla at nunc lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet.
                                In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.</p>

                                <img src="images/imgAboutUs/Btn (1).png" alt="" />

                        </div>
                        <div className='imgBarberAbout'>

                        </div>
                    </div>
            </div>
            <TimeOnJob/>
            <OurBarber/>
            <OurTopBrand/>
            <Footer/>

        </div>
        
        </>
      );
}

 ;