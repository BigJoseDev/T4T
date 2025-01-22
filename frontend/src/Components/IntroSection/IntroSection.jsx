import studentstogether from "../../assets/studentstogether.jpeg";
import student3 from "../../assets/student3.jpg";
const IntroSection = () => {
  return (
    <section className="py-20 px-8 md:px-16 lg:px-32 bg-gradient-to-r from-gray-200 via-gray-200 to-gray-300 bg-opacity-80">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold leading-snug font-[Aboreto]">
            WE BELIEVE IN <br /> REDEFINING <br /> EDUCATION
          </h1>
        </div>

        {/* Right Section */}
        <div>
          <p className="text-lg md:text-xl font-[Aboreto]">
          T4T is a free Web3 and AI coding school that fosters peer-to-peer
          learning, designed to empower individuals and create a new generation of
          problem solvers.
          </p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Mission Box */}
        <div className="bg-gradient-to-r from-green-900 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white p-6 rounded-lg font-[Aboreto] flex items-center justify-center h-full">
          <p className="text-xl md:text-xl font-medium text-center">
            "Our mission is to provide free Web3 and AI education, fostering
            innovation and opportunity."
          </p>
        </div>

        {/* Images */}
        <div>
          <img
            src={studentstogether}
            alt="Students discussing"
            className="w-full rounded-lg"
          />
        </div>
        <div>
          <img
            src={student3}
            alt="Woman working on laptop"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
