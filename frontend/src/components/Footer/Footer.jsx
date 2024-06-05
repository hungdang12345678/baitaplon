import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" className="footer-logo" />

          <div className="footer-social-icons">

          </div>
        </div>
        <div className="footer-content-center">
            <h2>Group 14</h2>
            <ul>
                <li>Home</li>
                
                <li>About us</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>CONTACT US</h2>
            <ul>
                <li>23110189@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright"> Copyright 2024 @ YumVi.com - All right preserved </p>
    </div>
  );
};

export default Footer;
