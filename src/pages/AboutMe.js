import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import AboutContent from "../components/AboutContent";

const AboutMe = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT ME" text="I'M A FRIENDLY DEVELOPER" />
      <AboutContent />
      <Footer />
    </div>
  );
};
export default AboutMe;
