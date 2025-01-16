import { motion } from "framer-motion";
import highlight1 from "../../assets/highlight1.jpeg";
import highlight2 from "../../assets/highlight2.jpeg";
import highlight3 from "../../assets/highlight3.jpeg";


const Highlights = () => {
    const highlights = [
      {
        title: "No Tuition Fees",
        description:
          "T4T is completely free and supported by industry partners consisting of top corporations and startups.",
        img: highlight1,
      },
      {
        title: "No Classes",
        description:
          "Students are free to explore their own field of programming and discover what they are most passionate about.",
        img: highlight2 ,
      },
      {
        title: "Equal Opportunity",
        description:
          "Everyone has fair and equal access to a quality learning environment regardless of social or education background.",
        img: highlight3,
      },
    ];
  
    return (
      <section className="py-20 px-6 sm:px-16 md:px-24 bg-gray-100">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center font-[Aboreto]">
          What Makes T4T Different
        </h2>
        <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 50 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 font-[Aboreto]">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={highlight.img}
                alt={highlight.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </section>
    );
  };

  export default Highlights;