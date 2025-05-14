import React from "react";
import Hero from "../components/home/Hero.jsx";
import Features from "../components/home/Features.jsx";
import HowItWorks from "../components/home/HowItWorks.jsx";
import Cta from "../components/home/Cta.jsx";
import AboutUs from "../components/home/AboutUs.jsx";
import Contact from "../components/home/Contact.jsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <HowItWorks />
      <Cta />
      <AboutUs />
      <Contact />
    </div>
  );
};

export default Home;
