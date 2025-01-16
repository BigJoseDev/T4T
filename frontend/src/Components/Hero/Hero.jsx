import React from "react";
import heroimage2 from "../../assets/heroimage2.jpeg";
import { motion } from "framer-motion";

const Hero = () => {
  
  return (
    <section
      className="relative w-full h-[580px] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${heroimage2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="font-[Aboreto] relative z-10 text-center px-4">
        <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 2 }}
        className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-6 md:mb-8 -mt-48 sm:-mt-40 md:-mt-52 ">
          TECH FOR THE FUTURE <br />
          TECH FOR <span className="text-green-400"> YOU</span>
        </motion.h1>
      </div>

      <motion.p
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 2 }}
      
      className="absolute bottom-[-16px] right-[-10px] font-light text-sm sm:text-sm mb-8 px-4 font-[Aboreto]">
        "Decentralized Learning For a Decentralized Future"
      </motion.p>
    </section>
  );
};

export default Hero;
