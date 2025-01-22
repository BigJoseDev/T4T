import React from "react";
import { FaDonate, FaHandHoldingHeart, FaShareAlt } from "react-icons/fa";

const SupportUs = () => {
  return (
    <section className="bg-gray-100 py-20 px-8 md:px-16 lg:px-32 font-[Aboreto]">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Support T4T: Empower the Future of Education
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Your contribution helps us build a decentralized and accessible educational platform for the next generation of Web3 and AI developers.
        </p>
      </div>

      {/* Donation Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
        {/* One-Time Donation Option */}
        <div className="bg-white p-8 rounded-lg shadow-lg transition transform hover:scale-105">
          <div className="text-teal-600 text-4xl mb-6">
            <FaDonate />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">One-Time Donation</h3>
          <p className="text-gray-700 mb-6">
            A one-time donation helps us address immediate needs such as infrastructure, tools, and resources to empower our students.
          </p>
          <button className="bg-gradient-to-r from-green-900 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
            Donate Now
          </button>
        </div>

        {/* Recurring Donation Option */}
        <div className="bg-white p-8 rounded-lg shadow-lg transition transform hover:scale-105">
          <div className="text-teal-600 text-4xl mb-6">
            <FaHandHoldingHeart />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Recurring Donation</h3>
          <p className="text-gray-700 mb-6">
            Your ongoing support ensures the sustainability of our 24/7 Web3 and AI coding school, creating a continuous learning environment.
          </p>
          <button className="bg-gradient-to-r from-green-900 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
            Start Monthly Donation
          </button>
        </div>

        {/* Share/Spread Awareness Option */}
        <div className="bg-white p-8 rounded-lg shadow-lg transition transform hover:scale-105">
          <div className="text-teal-600 text-4xl mb-6">
            <FaShareAlt />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Spread the Word</h3>
          <p className="text-gray-700 mb-6">
            Not everyone can donate, but everyone can help us grow by sharing our mission and encouraging others to support T4T.
          </p>
          <button className="bg-gradient-to-r from-green-900 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
            Share Now
          </button>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center">
        <p className="text-lg text-gray-700 mb-6">
          Every contribution, no matter how big or small, helps build a future where education is decentralized, accessible, and impactful.
        </p>
        <button className="bg-gradient-to-r from-green-900 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold py-4 px-12 rounded-full text-xl transition duration-300">
          Support Us Now
        </button>
      </div>
    </section>
  );
};

export default SupportUs;
