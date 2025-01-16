import { motion } from "framer-motion";


const Philosophy = () => {
    return (
      <motion.section
      whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
      className="py-14 px-6 sm:px-16 md:px-24 text-center bg-gray-100">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-[Aboreto]">
          Our Philosophy
        </h2>
        <p 
        
        className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8 font-[Aboreto]">
          At T4T, we believe in redefining education and empowering learners to take control of their own learning journey. We reject traditional, top-down systems of education and embrace a model built on the principles of decentralization, collaboration, and community. Just as Web3 challenges the conventional systems of technology and finance, we challenge the traditional ways of learning.
        </p>
        <button className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-6 py-3 rounded-lg transition duration-300">
          Apply Now
        </button>
      </motion.section>
    );
  };

  export default Philosophy;
  