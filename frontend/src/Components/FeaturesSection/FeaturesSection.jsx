import React from "react";
import { motion } from "framer-motion";
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';
import icon5 from '../../assets/icon5.png';
import icon6 from '../../assets/icon6.png';

const FeaturesSection = () => {
  const features = [
    {
      id: "01",
      title: "Tuition-Free",
      description:
        "We believe that education should not be a privilege. T4T is entirely free, fostering access for everyone.",
      icon: icon1,
    },
    {
      id: "02",
      title: "No Degree Required",
      description:
        "Your background doesn't matter; your willingness to learn does. No prior degree needed to join.",
      icon: icon2,
    },
    {
      id: "03",
      title: "No Lectures. No Teachers.",
      description:
        "Peer-to-peer learning at its finest. Learn by doing, collaborating, and solving real-world problems.",
      icon: icon3,
    },
    {
      id: "04",
      title: "No Prior Experience",
      description:
        "Beginner? No problem. T4T is open to learners of all skill levels, fostering growth from scratch.",
      icon: icon4,
    },
    {
      id: "05",
      title: "Not Just a Job: A Career",
      description:
        "Develop a meaningful career in tech with guidance, mentorship, and project-based learning.",
      icon: icon5,
    },
    {
      id: "06",
      title: "Strength in Diversity",
      description:
        "Join a diverse community of learners and innovators working toward a common goal.",
      icon: icon6,
    },
  ];

  return (
    <section className="bg-[#f9f9f9] py-16 px-6 md:px-12 lg:px-24 font-[Aboreto]">
      <h2 className="text-3xl font-bold text-center mb-12">
        Taking a Stand for a Better Future
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            className="bg-white p-6 shadow-lg rounded-lg text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
