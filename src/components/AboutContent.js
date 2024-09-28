import "./AboutContent.css";
import React from "react";
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="center">
        <h1>WHO AMI I?</h1>
        <p>
          I am a passionate software engineering student specializing in
          Artificial Intelligence, with a strong focus on Python, machine
          learning, deep learning, and NLP. My journey in tech combines a solid
          academic foundation with hands-on experience in software development,
          including building applications using React JS, C#, Python, and SQL.
        </p>
        <Link to="/Contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
    </div>
  );
};
export default AboutContent;
