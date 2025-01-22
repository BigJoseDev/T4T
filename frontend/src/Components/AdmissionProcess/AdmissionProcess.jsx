import React from "react";
import { FaUserCheck, FaPuzzlePiece, FaCalendarAlt, FaLayerGroup, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

const AdmissionProcess = () => {
  const steps = [
    {
      id: "01",
      title: "Registration",
      description: "Begin your journey by creating your T4T profile.",
      icon: <FaUserCheck />,
    },
    {
      id: "02",
      title: "Gamified Test",
      description: "Engage in challenges that test your logic and problem-solving skills.",
      icon: <FaPuzzlePiece />,
    },
    {
      id: "03",
      title: "Intake Selection",
      description: "Choose your cohort and watch the introductory video.",
      icon: <FaCalendarAlt />,
    },
    {
      id: "04",
      title: "The Genesis Phase",
      description: "Collaborate with peers and explore foundational Web3 and AI concepts over 2–3 months on our Slack workspace",
      icon: <FaLayerGroup />,
    },
    {
      id: "05",
      title: "Web3 Academy",
      description: "Step into a 24/7 immersive learning experience at T4T’s Web3 Academy.",
      icon: <FaRocket />,
    },
  ];

  return (
    <section className="py-16 px-8 md:px-16 lg:px-32 bg-gradient-to-r from-gray-200 via-gray-200 to-gray-300 bg-opacity-80">
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-12 mt-12 text-gray-800">
        Admission Process
      </h1>

      <div className="relative border-l-4 border-teal-600 ml-6">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className="mb-10 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <motion.div
              className="absolute -left-10 bg-teal-600 text-white rounded-full p-4 shadow-md"
              style={{ top: "50%", transform: "translateY(-50%)" }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {step.icon}
            </motion.div>

            <motion.div
              className={`pl-8 ${index < steps.length - 1 ? "pb-6" : ""}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AdmissionProcess;
