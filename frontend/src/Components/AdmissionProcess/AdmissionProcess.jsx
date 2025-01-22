import React from "react";
import { FaUserCheck, FaPuzzlePiece, FaCalendarAlt, FaSwimmer, FaRocket } from "react-icons/fa";

const AdmissionProcess = () => {
  const steps = [
    {
      id: "01",
      title: "Registration",
      description: "Begin your journey with a simple registration step.",
      icon: <FaUserCheck />,
    },
    {
      id: "02",
      title: "Online Games",
      description: "Test your logic and memory with engaging online games.",
      icon: <FaPuzzlePiece />,
    },
    {
      id: "03",
      title: "Intake Subscription",
      description: "Choose your preferred intake and watch the intro video.",
      icon: <FaCalendarAlt />,
    },
    {
      id: "04",
      title: "The Piscine",
      description: "Immerse yourself in 28 days of collaborative learning.",
      icon: <FaSwimmer />,
    },
    {
      id: "05",
      title: "Kick-Off",
      description: "Congratulations! Begin your adventure in the coding world.",
      icon: <FaRocket />,
    },
  ];

  return (
    <section className="py-16 px-8 md:px-16 lg:px-32 bg-gradient-to-r from-gray-200 via-gray-200 to-gray-300 bg-opacity-80 font-[Aboreto]">
      <h2 className="text-center text-lg font-bold uppercase tracking-wide mb-4 mt-4 text-teal-600">
        Quick Overview
      </h2>
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-12 text-gray-800">
        Admission Process
      </h1>

      {/* Timeline Container */}
      <div className="relative border-l-4 border-teal-600 ml-6">
        {steps.map((step, index) => (
          <div key={step.id} className="mb-10 relative">
            {/* Step Icon */}
            <div
              className="absolute -left-10 bg-teal-600 text-white rounded-full p-4 shadow-md"
              style={{ top: "50%", transform: "translateY(-50%)" }}
            >
              {step.icon}
            </div>
            {/* Step Content */}
            <div className={`pl-8 ${index < steps.length - 1 ? "pb-6" : ""}`}>
              <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Apply Now Button */}
      <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-green-900 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300">
          Apply Now
        </button>
      </div>
    </section>
  );
};

export default AdmissionProcess;
