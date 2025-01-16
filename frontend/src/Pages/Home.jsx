import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Philosophy from "../Components/Philosophy/Philosophy";
import Problems from "../Components/ProblemsCard/Problems";
import Highlights from "../Components/HighlightsCard/Highlights";
import Skills from "../Components/SkillsCard/Skills";
import Footer from "../Components/Footer/Footer";
import AfterT4T from "../Components/AfterT4T/AfterT4t";

const Home = () => {
  return (
  <div>
   
    <Hero/>
    <Philosophy/>
    <Problems/>
    <Highlights/>
    <Skills/>
    <AfterT4T/>
    
  </div>

  )
};

export default Home;
