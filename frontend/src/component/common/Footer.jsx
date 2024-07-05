import React from 'react'
import './Footer.css'
import { ImFacebook2 } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";
import { assets } from '../../assets/assets';


function Footer() {
  return (
    <>
      <div className='footer' id='footer'>
        <div className="footer-content">
          <div className="footer-content-left">
            <img className='logo1' src={assets.mango1} alt="mango_logo"/>
            <div className='footer-social-icons'>
              <img src={assets.facebook_icon} alt="google-icon"/>
              {/*<img src={assets.facebook_icon} alt="fb-icon"/>
              <img src={assets.facebook_icon} alt="insta-icon"/>*/}
            </div>
          </div>
          <div className="footer-content-center">
            <h2>MANGO_MART</h2>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Mangoes</li>
              <li>Delivery</li>
            </ul>
          </div>
          <div className="footer-content-right">
            <h2>GET IN TUCH</h2>
            <ul>
              <li>+94 711313440</li>
              <li>Mangomart@.com</li>
            </ul>
          </div>
        </div>
        <hr/>
        <p className='footer-copyright'>Copyright 2024 @ MangoMart.lk- All Right Reserved</p>

      </div>
    </>

  )
}

export default Footer