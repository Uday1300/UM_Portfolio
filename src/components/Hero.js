import React from 'react';
import "./Hero.css";
import Introimg from "../assets/intro-bg.jpg";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="Hero">
      <div className="mask">
        <img src={Introimg} alt="Introimg" className="intro-img" />
      </div>
      <div className="content">
        <p>HI, I'M UDAY MUNDRA</p>
        <h1>A FULL STACK DEVELOPER</h1>
        <Link to="/Project" className="btn">Projects</Link>
        <Link to="/Contact" className="btn">Contact</Link>
      </div>
    </div>
  );
}

export default Hero;
