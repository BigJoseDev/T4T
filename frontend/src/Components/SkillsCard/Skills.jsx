import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Skills = () => {
  const scrollRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const scrollRight = () => {
    if (scrollRef.current && !isAtEnd) {
      scrollRef.current.scrollBy({
        left: window.innerWidth,
        behavior: "smooth",
      });
      setIsAtStart(false);
      setIsAtEnd(true);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current && !isAtStart) {
      scrollRef.current.scrollBy({
        left: -window.innerWidth,
        behavior: "smooth",
      });
      setIsAtStart(true);
      setIsAtEnd(false);
    }
  };

  return (
    <motion.section
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      className="py-10 px-6 sm:px-16 md:px-24"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-16 font-[Aboreto]">
        Work-Ready Talent
      </h2>

      <div className="relative">
        <div
          className="absolute top-40 left-[-6px] transform -translate-y-1/2 text-white rounded-full p-2 cursor-pointer sm:hidden"
          onClick={scrollLeft}
          style={{ zIndex: 10 }}
        >
          <FaChevronLeft className="text-2xl" />
        </div>

        <div
          className="absolute top-40 right-[-8px] transform -translate-y-1/2 text-white rounded-full p-2 cursor-pointer sm:hidden"
          onClick={scrollRight}
          style={{ zIndex: 10 }}
        >
          <FaChevronRight className="text-2xl" />
        </div>

        <div
          ref={scrollRef}
          className="overflow-x-auto flex gap-8 sm:gap-8 pb-8 sm:overflow-visible sm:flex-row"
        >
          {/* Card 1 - Technical Skills */}
          <div className="bg-gradient-to-r from-black via-green-950 to-black hover:from-green-600 hover:via-gray-800 hover:to-teal-600 p-8 rounded-lg shadow-lg w-full sm:w-1/2 flex-shrink-0 flex flex-col justify-center items-center font-[Aboreto]">
            <h3 className="text-xl font-semibold text-white mb-4 text-center">
              Tech Skills
            </h3>
            <p className="text-white mb-2 text-center">Blockchain Developer</p>
            <p className="text-white mb-2 text-center">Web3 Frontend Developer</p>
            <p className="text-white mb-2 text-center">Smart Contract Developer</p>
            <p className="text-white mb-2 text-center">AI Engineer</p>
            <p className="text-white mb-2 text-center">Data Scientist (AI)</p>
            <p className="text-white mb-2 text-center">
              (dApp) Developer
            </p>
            <p className="text-white text-center">Cybersecurity Specialist</p>
          </div>

          {/* Card 2 - Soft Skills */}
          <div className="bg-gradient-to-r from-black via-green-950 to-black hover:from-green-600 hover:via-gray-800 hover:to-teal-600 p-8 rounded-lg shadow-lg w-full sm:w-1/2 flex-shrink-0 flex flex-col justify-center items-center font-[Aboreto]">
            <h3 className="text-xl font-semibold text-white mb-4 text-center">
              Soft Skills
            </h3>
            <p className="text-white mb-2 text-center">Team Collaboration</p>
            <p className="text-white mb-2 text-center">Critical Thinking</p>
            <p className="text-white mb-2 text-center">
              Blockchain Advocacy & Education
            </p>
            <p className="text-white mb-2 text-center">Problem-Solving</p>
            <p className="text-white mb-2 text-center">Project Management</p>
            <p className="text-white mb-2 text-center">Creative Design Thinking</p>
            <p className="text-white text-center">Effective Communication</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
