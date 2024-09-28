import "./ServicesContent.css"; // Create this CSS file for styles
import React from "react";
import { Link } from "react-router-dom";

const ServicesContent = () => {
  return (
    <div className="services">
      <div className="center">
        <h1>WHAT I OFFER</h1>
        <p>
          As a dedicated software engineer, I bring a diverse skill set in
          various programming languages and frameworks. My Knowledge spans
          JavaScript, Python, Java, C#, and SQL, with some knowledge in
          React.js, Node.js, and machine learning technologies. I'm committed to
          delivering high-quality, efficient, and user-friendly solutions.
        </p>
        <Link to="/Contact">
          <button className="btn">Contact Me</button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesContent;
