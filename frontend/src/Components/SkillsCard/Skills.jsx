import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Skills = () => {
  const scrollRef = useRef(null); // Ref for the scrollable container
  const [isAtStart, setIsAtStart] = useState(true); // State to track if we are at the start
  const [isAtEnd, setIsAtEnd] = useState(false); // State to track if we are at the end

  // Function to scroll right (forward)
  const scrollRight = () => {
    if (scrollRef.current && !isAtEnd) {
      scrollRef.current.scrollBy({
        left: window.innerWidth, // Scroll horizontally by the full width of the viewport
        behavior: "smooth", // Smooth scroll
      });
      setIsAtStart(false); // We're no longer at the start
      setIsAtEnd(true); // Once we scroll, we might be at the end
    }
  };

  // Function to scroll left (backward)
  const scrollLeft = () => {
    if (scrollRef.current && !isAtStart) {
      scrollRef.current.scrollBy({
        left: -window.innerWidth, // Scroll back horizontally by the full width of the viewport
        behavior: "smooth", // Smooth scroll
      });
      setIsAtStart(true); // We are now back at the start
      setIsAtEnd(false); // We're no longer at the end
    }
  };

  return (
    <section className="py-10 px-6 sm:px-16 md:px-24">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-16 font-[Aboreto]">
        Work-Ready Talent
      </h2>

      {/* Container for the arrow icons and scrollable cards */}
      <div className="relative">

        {/* Left Arrow Icon - Positioned above the cards (visible only on mobile) */}
        <div
          className="absolute top-40 left-[-6px] transform -translate-y-1/2 text-white rounded-full p-2 cursor-pointer sm:hidden"
          onClick={scrollLeft}
          style={{ zIndex: 10 }}
        >
          <FaChevronLeft className="text-2xl" />
        </div>

        {/* Right Arrow Icon - Positioned above the cards (visible only on mobile) */}
        <div
          className="absolute top-40 right-[-8px] transform -translate-y-1/2 text-white rounded-full p-2 cursor-pointer sm:hidden"
          onClick={scrollRight}
          style={{ zIndex: 10 }}
        >
          <FaChevronRight className="text-2xl" />
        </div>

        {/* Cards */}
        <div
          ref={scrollRef} // Attach the ref to the scrollable container
          className="overflow-x-auto flex gap-8 sm:gap-8 pb-8 sm:overflow-visible sm:flex-row"
        >
          {/* Card 1 */}
          <div className="bg-gradient-to-r from-black via-green-950 to-black hover:from-green-600 hover:via-gray-800 hover:to-teal-600 p-8 rounded-lg shadow-lg w-full sm:w-1/2 flex-shrink-0 flex flex-col justify-center items-center font-[Aboreto]">
            <h3 className="text-xl font-semibold text-white mb-4 text-center">Tech Skills</h3>
            <p className="text-white mb-2 text-center">Blockchain Developer</p>
            <p className="text-white mb-2 text-center">Web3 Frontend Developer</p>
            <p className="text-white mb-2 text-center">Backend Developer (Web3)</p>
            <p className="text-white mb-2 text-center">Smart Contract Auditor</p>
            <p className="text-white mb-2 text-center">Cryptography Engineer</p>
            <p className="text-white mb-2 text-center">Artificial Intelligence</p>
            <p className="text-white text-center">Front-end Design</p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-r from-black via-green-950 to-black hover:from-green-600 hover:via-gray-800 hover:to-teal-600 p-8 rounded-lg shadow-lg w-full sm:w-1/2 flex-shrink-0 flex flex-col justify-center items-center font-[Aboreto]">
            <h3 className="text-xl font-semibold text-white mb-4 text-center">Soft Skills</h3>
            <p className="text-white mb-2 text-center">NFT Marketplace Curator</p>
            <p className="text-white mb-2 text-center">Blockchain Educator or Advocate</p>
            <p className="text-white mb-2 text-center">Cybersecurity Specialist (web3)</p>
            <p className="text-white mb-2 text-center">Cryptography Engineer</p>
            <p className="text-white mb-2 text-center">Artificial Intelligence</p>
            <p className="text-white text-center">Front-end Design</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
