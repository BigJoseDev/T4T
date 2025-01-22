import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-sky-950 to-green-950  text-white py-12 mt-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-cente font-[Aboreto]r">
        {/* Logo and Description Section */}
        <div className="mb-6 sm:mb-0 text-center sm:text-left">
          <h3 className="text-4xl font-bold text-white mb-2">T4T</h3>
          <p className="text-lg text-gray-300 max-w-md mx-auto sm:mx-0">
          T4T is a free Web3 and AI coding school that fosters peer-to-peer
          learning, designed to empower individuals and create a new generation of
          problem solvers.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col sm:flex-row gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="text-gray-300 space-y-3">
              <li><a href="/about" className="hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="/courses" className="hover:text-green-400 transition-colors">Courses</a></li>
              <li><a href="/contact" className="hover:text-green-400 transition-colors">Contact</a></li>
              <li><a href="/apply" className="hover:text-green-400 transition-colors">Apply Now</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <ul className="text-gray-300 space-y-3">
              <li><a href="https://twitter.com" className="hover:text-green-400 transition-colors">Twitter</a></li>
              <li><a href="https://discord.com" className="hover:text-green-400 transition-colors">Discord</a></li>
              <li><a href="https://linkedin.com" className="hover:text-green-400 transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-600 pt-6 text-center">
        <p className="text-sm text-gray-400">&copy; 2025 T4T. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
