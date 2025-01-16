import heroimage from "../../assets/heroimage.jpeg";

const Hero = () => {
  return (
    <section
      className="w-full flex flex-col justify-center items-start text-gray-200 "
      style={{
        height: "580px", // Adjust the height as needed
        backgroundImage: `url(${heroimage})`,
        backgroundSize: "cover", 
        backgroundPosition: "center 5%",
        backgroundRepeat: "no-repeat", // Prevents image tiling
      }}
    >
      <div className="font-sans max-w-4xl text-center relative z-10 px-6 mt-80">
    {/* Main Title */}
    <h1 className="text-2xl sm:text-5xl md:text-3xl font-extrabold text-gray-100 mb-6 opacity-90 drop-shadow-xl relative">
      T4T: Decentralized Learning For a Decentralized Future
      <span className="absolute inset-0 bg-gradient-to-r from-gray-400 via-white to-gray-400 opacity-50 blur-lg"></span>
    </h1>

    {/* Subheading */}
    <p className="text-xl sm:text-xl md:text-2xl text-gray-100 mb-6 opacity-90 drop-shadow-xl relative">
  "Learn by Doing, Learn With Peers"
  <span className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-300 opacity-50 blur-lg"></span>
</p>

    {/* Apply Now Button */}
    <button className="bg-gradient-to-r from-teal-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-6 py-3 rounded-lg transition duration-300">
  Apply Now
</button>

  </div>

    </section>
  );
};

export default Hero;
