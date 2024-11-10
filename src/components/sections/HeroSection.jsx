import Navbar from "../Navbar";
import Button from "../Button";
import image1 from "../../assets/Slider/slider1.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="flex flex-col w-full max-w-[100vw] lg:px-[20px] box-border">
      <div className="flex justify-center w-full relative box-border">
        <div className="flex flex-col bg-hero-banner bg-cover bg-center lg:rounded-[30px] p-[25px] md:p-[30px] lg:p-[35px] h-[500px] md:h-[600px] lg:h-[700px] w-full shadow-md box-border">
          {/* Navbar */}
          <div>
            <Navbar />
          </div>

          {/* Hero Slider */}
          <div className="flex justify-between w-full">
            {/* left side */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col mt-[60px] md:mt-[100px] lg:mt-[120px] gap-7 z-[100]"
            >
              {/* Trust line */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center items-center w-[140px] min-w-[140px] md:w-[175px] md:min-w-[175px] py-[3px] px-[10px] md:px-[16px] lg:px-[18px] text-[10px] md:text-[12px] border-[1.5px] uppercase rounded-full bg-transparent text-white relative overflow-hidden"
              >
                <motion.span
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 1.5,
                    ease: "linear"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                />
                100% Trusted Brand
              </motion.div>

              {/* heading */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col font-[Sora] text-white"
              >
                <div className="text-[36px] md:text-[62px] lg:text-[86px] font-black">A Brand Trusted</div>
                <div className="text-4xl md:text-5xl lg:text-7xl">by Doctor</div>
              </motion.div>

              {/* line */}
              <motion.span 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-[0.5px] w-full bg-white hidden md:flex origin-left"
              ></motion.span>

              {/* sub heading */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-white lg:text-xl hidden md:flex"
              >
                Care you can belive in, Compassion care, Advance Medicine, Close to Home.
              </motion.div>

              {/* Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <Button title={"View More"} color="white" />
              </motion.div>
            </motion.div>

            {/* right side */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-0 right-0 md:right-12 lg:right-28 w-[60%] md:w-[40%]"
            >
              <img src={image1} alt="Triocent" loading="lazy"/>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
