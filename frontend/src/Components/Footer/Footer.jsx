import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-sky-950 to-green-950 text-white py-12 mt-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center font-[Aboreto]">
        {/* Logo and Description Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="mb-6 sm:mb-0 text-center sm:text-left"
        >
          <h3 className="text-4xl font-bold text-white mb-2">T4T</h3>
          <p className="text-lg text-gray-300 max-w-md mx-auto sm:mx-0">
            T4T is a free Web3 coding school fostering peer-to-peer learning and empowering students to master decentralized technologies.
          </p>
        </motion.div>

        {/* Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 text-center sm:text-left"
        >
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="text-gray-300 space-y-3">
              <motion.li
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href="/" className="hover:text-green-400 transition-colors">Home</a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href="/about-us" className="hover:text-green-400 transition-colors">About Us</a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href="/whatweoffer" className="hover:text-green-400 transition-colors">What We Offer</a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href="/howtoapply" className="hover:text-green-400 transition-colors">How To Apply</a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href="/apply" className="hover:text-green-400 transition-colors">Apply Now</a>
              </motion.li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <ul className="text-gray-300 space-y-3">
              <motion.li
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href="https://twitter.com" className="hover:text-green-400 transition-colors">Twitter</a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href="https://discord.com" className="hover:text-green-400 transition-colors">Discord</a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href="https://linkedin.com" className="hover:text-green-400 transition-colors">LinkedIn</a>
              </motion.li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="border-t border-gray-600 pt-6 text-center"
      >
        <p className="text-sm text-gray-400">&copy; 2025 T4T. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
