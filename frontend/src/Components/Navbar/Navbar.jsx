import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Add scroll event listener
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 py-2 text-white z-50 ${
        scrolled ? "bg-opacity-70 bg-black" : ""
      }`}
    >
      <div className="text-4xl font-bold">T4T</div>
      <ul className="hidden md:flex space-x-6 text-lg">
        <li><a href="/" className="hover:text-green-500 transition">Home</a></li>
        <li><a href="/about-us" className="hover:text-green-500 transition">About Us</a></li>
        <li><a href="/web3" className="hover:text-green-500 transition">Web3</a></li>
        <li><a href="/how-to-apply" className="hover:text-green-500 transition">How to Apply</a></li>
        <li><a href="/support-us" className="hover:text-green-500 transition">Support Us</a></li>
      </ul>
      <button className="hidden sm:block bg-white text-black px-4 py-2 rounded-md transition hover:bg-gray-200">
        Apply Now
      </button>
    </nav>
  );
};

export default Navbar;
