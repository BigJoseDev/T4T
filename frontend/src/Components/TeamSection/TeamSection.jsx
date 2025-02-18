import React from "react";
import { motion } from "framer-motion";
import founder1 from '../../assets/founder12.jpg';
import founder2 from '../../assets/founder2.jpeg';
import founder3 from '../../assets/founder3.jpeg';
import founder4 from '../../assets/founder4.jpeg';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Josemaria Aliemhe",
      role: "Co-Founder",
      image: founder1,
    },
    {
      name: "Husseini Mudi",
      role: "Co-Founder",
      image: founder3,
    },
    {
      name: "Adelani Giwa",
      role: "Co-Founder",
      image: founder2,
    },
    {
      name: "Theophilus Eke",
      role: "Co-Founder",
      image: founder4,
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 font-[Aboreto]">
      <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img
              src={member.image}
              alt={`${member.name}'s photo`}
              className="w-48 h-48 mx-auto shadow-lg object-cover rounded-full"
            />
            <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
