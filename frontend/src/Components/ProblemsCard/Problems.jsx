import React from 'react';
import proimg from '../../assets/proimg.jpeg';
import proimg2 from '../../assets/proimg2.jpeg';
import proimg3 from '../../assets/proimg3.jpeg';
import { motion } from 'framer-motion';

const Problems = () => {
  const problems = [
    {
      title: "Rapid Technological Advancements",
      description:
        "Technology is evolving faster than traditional education systems can adapt, leaving students underprepared for the fast-paced tech industry.",
      img: proimg,
    },
    {
      title: "Critical Skills Deficiency",
      description:
        "Many graduates lack essential problem-solving, critical thinking, and adaptability skills, making them less effective in the workplace.",
      img: proimg2,
    },
    {
      title: "Mismatch Between Supply and Demand",
      description:
        "The demand for skilled tech professionals outpaces the number of graduates entering the workforce.",
      img: proimg3,
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-16 md:px-24 text-center font-[Aboreto]">
      {/* Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-800 mb-12"
      >
        The Problem in Tech Education
      </motion.h2>

      {/* Cards */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {problems.map((problem, index) => (
          <div
            key={index}
            className="relative rounded-lg shadow-lg overflow-hidden bg-gray-800 text-white flex flex-col items-center justify-end pb-6"
            style={{
              backgroundImage: `url(${problem.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              aspectRatio: '16/9', // Responsive height based on width
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 p-4 text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">{problem.title}</h3>
              <p className="text-sm sm:text-base text-ellipsis overflow-hidden">{problem.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Problems;
