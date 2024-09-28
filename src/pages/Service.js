import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import ServicesContent from "../components/ServicesContent";

const Service = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="SKILLS" text="PROGRAMMING LANGUAGES I KNOW" />\
      <ServicesContent />
      <Footer />
    </div>
  );
};
export default Service;
