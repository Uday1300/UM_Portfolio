import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color,setColor] =useState(false)
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    }
    else {
      setColor(false);
    }
  };
   window.addEventListener("scroll" ,changeColor); 
  
  return (
    <div className={color ? "Header Header-bg" : "Header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <div className="Hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Project">Project</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
