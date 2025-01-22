import { motion } from "framer-motion";

const Hero = ({
  title = "Default Title",
  subTitle = "",
  backgroundImage,
  overlayColor = "rgba(0, 0, 0, 0.5)",
  titleClass = "text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-6 md:mb-8 -mt-48 sm:-mt-40 md:-mt-52", 
  subtitleClass = "absolute bottom-[-16px] right-[-10px] font-light text-sm sm:text-sm mb-8 px-4 font-[Aboreto]"
}) => {
  return (
    <section
      className="relative w-full h-[580px] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <motion.div
        className="absolute inset-0"
        style={{ backgroundColor: overlayColor }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      ></motion.div>

      {/* Content */}
      <div className="font-[Aboreto] relative z-10 text-center px-4">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          className={titleClass}
        >
          {title}
        </motion.h1>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className={subtitleClass}
      >
        {subTitle}
      </motion.p>
    </section>
  );
};

export default Hero;
