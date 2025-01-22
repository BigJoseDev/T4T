import React from "react";
import After from "../../assets/After.jpeg"; 
import { motion } from "framer-motion";

const AfterT4T = () => {
  return (
    <section
      className="relative w-full h-[500px] flex items-center justify-center text-white bg-cover bg-center"
      style={{
        backgroundImage: `url(${After})`,
      }}
    >
      {/* Overlay to darken the background image */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content Section */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center px-6 md:px-12 font-[Aboreto] mb-40"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          AFTER T4T
        </h2>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-6">
          At T4T, our graduates gain the skills to excel in Web3 and AI. Whether you want to work on blockchain projects, create decentralized applications, explore AI solutions, or start your own venture, T4T gives you the tools, knowledge, and connections to succeed.
        </p>
      </motion.div>
    </section>
  );
};

export default AfterT4T;
