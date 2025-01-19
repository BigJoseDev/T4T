import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Philosophy from "../Components/Philosophy/Philosophy";
import Problems from "../Components/ProblemsCard/Problems";
import Highlights from "../Components/HighlightsCard/Highlights";
import Skills from "../Components/SkillsCard/Skills";

const Home = () => {
  return (
  <div>
    {/* <Navbar /> */}
    <Hero/>
    <Philosophy/>
    <Problems/>
    <Highlights/>
    <Skills/>
  </div>

  )
};

export default Home;
