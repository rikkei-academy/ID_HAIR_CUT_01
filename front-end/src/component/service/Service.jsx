import React, { Component } from 'react';
import ImgAboutUs from '../task/ImgAboutUs';
import Header from '../task/Header';
import "./service.css"
import BestSaleHair from '../task/BestSaleHair';
import Footer from '../task/Footer';
export default function Service () {
    return ( 
        <>
        <div className='Service'> 
        <Header/>
        <ImgAboutUs/>
        <div className='hairHotPrice'>

        <BestSaleHair/>
        <BestSaleHair/>
    

        </div>  
          <Footer/>


        </div>
        </>
     );
}

