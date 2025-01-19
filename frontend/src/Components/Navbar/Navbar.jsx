import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
        <li><Link to="/" className="hover:text-green-500 transition">Home</Link></li>
        <li><Link to="/about-us" className="hover:text-green-500 transition">About Us</Link></li>
        <li><Link to="/web3" className="hover:text-green-500 transition">Web3</Link></li>
        <li><Link to="/how-to-apply" className="hover:text-green-500 transition">How to Apply</Link></li>
        <li><Link to="/support-us" className="hover:text-green-500 transition">Support Us</Link></li>
      </ul>
      <button className="hidden sm:block bg-white text-black px-4 py-2 rounded-md transition hover:bg-gray-200">
        Apply Now
      </button>
    </nav>
  );
};

export default Navbar;
