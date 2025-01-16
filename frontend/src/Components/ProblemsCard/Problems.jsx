import React from 'react';
import proimg from '../../assets/proimg.jpeg';
import proimg2 from '../../assets/proimg2.jpeg';
import proimg3 from '../../assets/proimg3.jpeg';
const Problems = () => {
  const problems = [
    {
      title: "Pace",
      description:
        "Tech is moving so fast that traditional academic institutions are unable to keep up.",
      img: proimg,
    },
    {
      title: "Skills Gap",
      description:
        "Graduates are not workplace ready in terms of critical thinking, problem-solving, and more.",
      img: proimg2,
    },
    {
      title: "Demand",
      description:
        "Production of tech graduates is not meeting industry needs.",
      img: proimg3,
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-16 md:px-24 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-12">
        The Problem in Tech Education
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {problems.map((problem, index) => (
          <div
            key={index}
            className="p-6 rounded-lg text-white shadow-lg"
            style={{
              backgroundImage: `url(${problem.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '200px', // Adjust as needed
            }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4">{problem.title}</h3>
            <p className="text-sm sm:text-base">{problem.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Problems;
