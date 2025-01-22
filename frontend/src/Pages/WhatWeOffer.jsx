import React from "react";
import { FaRobot, FaPeopleArrows, FaRegLightbulb } from "react-icons/fa";
import { SiBlockchaindotcom } from "react-icons/si";
import aiImg2 from '../assets/aiImg3.gif';
import Hero from "../Components/Hero/Hero";
import { motion } from 'framer-motion';

const WhatWeOffer = () => {
  return (
    <>
      <Hero
        title={
          <>
           The Future of Education with Web3 and <span className="text-green-400">AI</span><br /> At T4T, we’re leading the way in decentralized education. Our peer-to-peer learning model empowers students to master Web3 and AI, shaping the future of technology.
          </>
        }
        titleClass="text-2xl sm:text-4xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 mt-10 sm:-mt-4 md:-mt-5 "
        backgroundImage={aiImg2}
      />
      <section className="bg-gray-50 py-16 px-8 md:px-16 lg:px-32 font-[Aboreto]">

        {/* Web3 Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
            Web3
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Card for Understanding Web3 */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-xl"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-teal-600 text-4xl mb-6">
                <SiBlockchaindotcom />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Understanding Web3</h3>
              <p className="text-gray-700 mb-4">
                Web3 represents the next evolution of the internet, powered by decentralized technologies like blockchain. It is a transformative shift that aims to give individuals more control over their data, privacy, and digital assets.
              </p>
              <p className="text-gray-700 mb-4">
                At T4T, students dive deep into the world of decentralized systems. They gain hands-on experience with blockchain, smart contracts, decentralized applications (dApps), and more, preparing them to innovate in the decentralized web.
              </p>
            </motion.div>

            {/* Card for The Power of Blockchain */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-xl"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-teal-600 text-4xl mb-6">
                <SiBlockchaindotcom />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Power of Blockchain</h3>
              <p className="text-gray-700 mb-4">
                Blockchain is the backbone of Web3, providing a secure, transparent, and decentralized way to manage digital transactions and data. With real-world applications in sectors like finance, healthcare, and supply chains, blockchain technology is changing the way we interact online.
              </p>
              <p className="text-gray-700 mb-4">
                T4T students get hands-on experience in developing blockchain-based applications, giving them the skills to be at the forefront of this revolutionary technology.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* AI Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
             Artificial Intelligence (AI)
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Card for Understanding AI */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-xl"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-teal-600 text-4xl mb-6">
                <FaRobot />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Understanding AI</h3>
              <p className="text-gray-700 mb-4">
                Artificial Intelligence is a broad field that enables machines to learn, reason, and make decisions. From enhancing customer experiences to advancing medical research, AI is driving innovation across industries.
              </p>
              <p className="text-gray-700 mb-4">
                At T4T, students explore AI concepts like machine learning, natural language processing, and neural networks, gaining the skills to build intelligent systems that can improve lives and businesses worldwide.
              </p>
            </motion.div>

            {/* Card for Practical AI Applications */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-xl"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-teal-600 text-4xl mb-6">
                <FaRobot />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Practical AI Applications</h3>
              <p className="text-gray-700 mb-4">
                AI has immense potential in solving real-world problems. From predictive analytics in healthcare to autonomous vehicles, the possibilities are limitless. At T4T, students learn to apply AI in practical scenarios that have a lasting impact on society.
              </p>
              <p className="text-gray-700 mb-4">
                By working on hands-on AI projects, students develop the problem-solving and analytical skills required to build AI-powered applications and services.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Peer-to-Peer Learning Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
            Our Peer-to-Peer Learning Model
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Card for Collaborative Learning */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-xl"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-teal-600 text-4xl mb-6">
                <FaPeopleArrows />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Collaborative Learning</h3>
              <p className="text-gray-700 mb-4">
                Our peer-to-peer learning model emphasizes collaboration. By working together on projects, solving challenges, and providing feedback, students not only gain technical skills but also enhance their communication, teamwork, and leadership abilities.
              </p>
              <p className="text-gray-700 mb-4">
                Students learn to teach and learn from each other, building a community where everyone contributes and grows together. This mirrors the dynamics of the real-world workplace, where teamwork is key.
              </p>
            </motion.div>

            {/* Card for Real-World Skills */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-xl"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-teal-600 text-4xl mb-6">
                <FaRegLightbulb />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Real-World Skills</h3>
              <p className="text-gray-700 mb-4">
                Through our decentralized approach, students learn not only technical skills but also how to solve real-world problems and take initiative in a collaborative, self-driven environment.
              </p>
              <p className="text-gray-700 mb-4">
                They leave with practical experience that prepares them to enter the workforce or launch their own startups, with the confidence and skills to succeed.
              </p>
            </motion.div>
          </div>
        </motion.div>
        {/* Call to Action Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Ready to Shape the Future?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join T4T today and be part of the decentralized, peer-driven education revolution. Let’s build the future together.
          </p>
          <button className="bg-gradient-to-r from-green-900 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold py-2 px-6 rounded-lg  text-xl transition duration-300">
            Get Started
          </button>
        </motion.div>
      </section>
    </>
  );
};

export default WhatWeOffer;
