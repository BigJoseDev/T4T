import React from 'react';
import proimg from '../../assets/proimg.jpeg';
import proimg2 from '../../assets/proimg2.jpeg';
import proimg3 from '../../assets/proimg3.jpeg';
import { motion } from 'framer-motion';

const Problems = () => {
  const problems = [
    {
      title: "Pace",
      description:
        "Tech is moving so fast that traditional academic institutions are unable to keep up.",
      img: proimg,
    },
    {
      title: "Skills Gap",
      description:
        "Graduates are not workplace ready in terms of critical thinking, problem-solving, and more.",
      img: proimg2,
    },
    {
      title: "Demand",
      description:
        "Production of tech graduates is not meeting industry needs.",
      img: proimg3,
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-16 md:px-24 text-center">
      {/* Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-12"
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
              <p className="text-sm sm:text-base">{problem.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Problems;
