import { motion } from "framer-motion";


const Philosophy = () => {
    return (
      <motion.section
      whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
      className="py-14 px-6 sm:px-16 md:px-24 text-center bg-gray-100 font-[Aboreto]">
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-800 mb-6 ">
          Our Philosophy
        </h2>
        <p 
        
        className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8 ">
          At T4T, we believe in redefining education by giving learners the power to take charge of their own learning journey. We reject traditional, top-down systems and embrace a model based on decentralization, collaboration, and community. Just as Web3 is transforming technology and finance, and AI is driving innovation, we are challenging the traditional ways of learning to create something truly transformative.
        </p>
        <button className="bg-gradient-to-r from-green-900 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300">
          Apply Now
        </button>
      </motion.section>
    );
  };

  export default Philosophy;
  