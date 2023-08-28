import React from 'react';
import { FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa';
import "./fotter.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Mumbai, Maharashtra</p>
              <p>India</p>
            </div>
            <div className="contact-info">
              <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "0.5rem" }} />9158530812</h4>
            </div>
            <div className="contact-info">
              <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "0.5rem" }} />mundra1311@gmail.com</h4>
            </div>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>Motivated and enthusiastic software engineer with a strong background in design and integration.</p>
          <p>Experienced in front-end and back-end web development with a passion for implementing and launching new projects.</p>
          <div className="social">
            <FaInstagram size={20} style={{ color: "#fff", marginRight: "0.5rem" }} />
            <FaTwitter size={20} style={{ color: "#fff", marginRight: "0.5rem" }} />
            <FaLinkedin size={20} style={{ color: "#fff", marginRight: "0.5rem" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
