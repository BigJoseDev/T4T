import React from "react";
import studentstogether from "../../assets/studentstogether.jpeg";
import student3 from "../../assets/student3.jpg";
import { motion } from "framer-motion";

const IntroSection = () => {
  return (
    <section className="py-20 px-8 md:px-16 lg:px-32 bg-gradient-to-r from-gray-200 via-gray-200 to-gray-300 bg-opacity-80">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold leading-snug font-[Aboreto]">
            WE BELIEVE IN <br /> REDEFINING <br /> EDUCATION
          </h1>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg md:text-xl font-[Aboreto]">
            T4T is a free Web3 and AI coding school that fosters peer-to-peer
            learning, designed to empower individuals and create a new generation
            of problem solvers.
          </p>
        </motion.div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Mission Box */}
        <motion.div
          className="bg-gradient-to-r from-green-900 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white p-6 rounded-lg font-[Aboreto] flex items-center justify-center h-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-xl md:text-xl font-medium text-center">
            "Our mission is to provide free Web3 and AI education, fostering
            innovation and opportunity."
          </p>
        </motion.div>

        {/* Images */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={studentstogether}
            alt="Students discussing"
            className="w-full rounded-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={student3}
            alt="Woman working on laptop"
            className="w-full rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
