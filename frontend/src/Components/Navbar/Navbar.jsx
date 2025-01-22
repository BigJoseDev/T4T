import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi"; // Import icons for hamburger and close

import logo1 from "../../assets/logo1.webp";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State to control pop-up visibility

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 py-3 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      } bg-white`}
    >
      <Link to="/">
        <img
          src={logo1}
          alt="T4T Logo"
          className="h-12 w-16 rounded-full object-cover " // Added styling
        />
      </Link>
      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-8 text-lg font-medium font-[Aboreto]">
        <li>
          <a
            href="/about-us"
            className="text-black hover:text-green-500 transition"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="/whatweoffer"
            className="text-black hover:text-green-500 transition"
          >
            What We Offer
          </a>
        </li>
        <li>
          <a
            href="/how-to-apply"
            className="text-black hover:text-green-500 transition"
          >
            How to Apply
          </a>
        </li>
        <li>
          <a
            href="/support-us"
            className="text-black hover:text-green-500 transition"
          >
            Support Us
          </a>
        </li>
      </ul>

      {/* Mobile Button */}
      <button className="bg-gradient-to-r from-green-900 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300 hidden md:block">
        Apply Now
      </button>

      {/* Hamburger Icon on Mobile */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-2xl text-black focus:outline-none"
        >
          {isOpen ? <></> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Pop-up Menu */}
      {isOpen && (
        <div
          className="fixed inset-0  z-50 transition-all duration-300"
          style={{
            transform: isOpen ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          {/* Half-Screen Pop-up Menu */}
          <div className="w-1/2 h-full bg-white p-6">
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-6 right-6 text-3xl text-black"
            >
              <HiX />
            </button>

            {/* Menu Links */}
            <ul className="flex flex-col items-start space-y-5 text-lg font-bold font-[Aboreto] mt-10">
              <li>
                <a
                  href="/"
                  className="text-black hover:text-green-500 transition"
                  onClick={toggleMenu}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about-us"
                  className="text-black hover:text-green-500 transition"
                  onClick={toggleMenu}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/whatweoffer"
                  className="text-black hover:text-green-500 transition"
                  onClick={toggleMenu}
                >
                  What We Offer
                </a>
              </li>
              <li>
                <a
                  href="/how-to-apply"
                  className="text-black hover:text-green-500 transition"
                  onClick={toggleMenu}
                >
                  How to Apply
                </a>
              </li>
              <li>
                <a
                  href="/support-us"
                  className="text-black hover:text-green-500 transition"
                  onClick={toggleMenu}
                >
                  Support Us
                </a>
              </li>
            </ul>

            {/* Apply Now Button */}
            <button
              className="bg-gradient-to-r from-green-900 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 mt-6"
              onClick={toggleMenu}
            >
              Apply Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
