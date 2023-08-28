import "./Work.css";
import React from 'react';
import pro2 from "../assets/2.jpg";
import pro3 from "../assets/3.png";
import pro4 from "../assets/4.png";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
            <img src={pro2} alt="Project 2" />
            <h2 className="project-title">ML Driven Clinical disease System</h2>
            <div className="pro-details">
                <p>Designed and developed a user interface for a clinical disease system using HTML, CSS, and JavaScript
                Conducted data analysis and preprocessing to prepare data for a machine-learning model
                Developed a machine learning model using Java and the Random Forest algorithm to predict diseases
                Utilized SQL for database management and data retrieva</p>
            </div>
        </div>
        <div className="project-card">
            <img src={pro3} alt="Project 2" />
            <h2 className="project-title">E-Commerce Website</h2>
            <div className="pro-details">
                <p>Developed an e-commerce website using HTML, CSS, Javascript which integrated data from different back-end services and databases
                Designed and optimized the website's user interface and web performance
                Implemented source control to manage code changes and collaborate with other developers
               </p>
            </div>
        </div>
        <div className="project-card">
            <img src={pro4} alt="Project 2" />
            <h2 className="project-title">Image Search Web App</h2>
            <div className="pro-details">
                <p>Created an interactive image search web application enabling users to search for images using keywords.
                Leveraged the Unsplash API to dynamically fetch and display search results, enriching the user experience.
                Designed an engaging grid layout to showcase images along with direct links to their sources on Unsplash.
                Implemented a "Show More" button, allowing users to seamlessly load additional images as they explore their interests.</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
