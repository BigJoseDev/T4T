import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Philosophy from "../Components/Philosophy/Philosophy";
import Problems from "../Components/ProblemsCard/Problems";
import Highlights from "../Components/HighlightsCard/Highlights";
import Skills from "../Components/SkillsCard/Skills";
import Footer from "../Components/Footer/Footer";
import AfterT4T from "../Components/AfterT4T/AfterT4t";
import heroimage2 from "../assets/heroimage2.jpeg";

const Home = () => {
  return (
    <div>
      <Hero
        title={
          <>
            TECH FOR THE FUTURE <br />
            TECH FOR <span className="text-green-400">YOU</span>
          </>
        }
        subTitle={<>"Learn By Doing, Learn With Peers"</>}
        backgroundImage={heroimage2}
        titleClass="text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-6 md:mb-8 -mt-48 sm:-mt-40 md:-mt-52"
        subtitleClass="absolute bottom-[-16px] right-[-10px] font-light text-sm sm:text-sm mb-8 px-4 font-[Helvetica]"
      />

      <Philosophy />
      <Problems />
      <Highlights />
      <Skills />
      <AfterT4T />
    </div>
  );
};

export default Home;
