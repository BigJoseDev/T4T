import React from "react";
import After from "../../assets/After.jpeg"; // Replace with your actual image path

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
      <div className="relative z-10 text-center px-6 md:px-12 font-[Aboreto] mb-40">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          AFTER T4T
        </h2>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-6">
          Upon completing T4T, our alumni are equipped with the skills to thrive in the rapidly growing Web3 space. Whether you're looking to join blockchain projects, develop decentralized applications, or start your own venture, T4T will give you the tools, network, and knowledge to succeed in the decentralized world.
        </p>
        
      </div>
    </section>
  );
};

export default AfterT4T;
