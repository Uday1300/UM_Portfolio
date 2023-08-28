import "./aboutcontent.css";

import React from 'react';
import { Link } from 'react-router-dom';


const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I</h1>
        <p>Motivated and enthusiastic software engineer with a strong background in design and integration.
        Experienced in front-end and back-end web development with a passion for implementing and launching new projects.</p>
        <Link to="/Contact">
        <button className="btn">Contact</button>
      </Link>
      </div>
    </div>
  );
}

export default AboutContent;
