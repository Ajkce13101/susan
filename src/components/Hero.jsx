import { motion } from "framer-motion";
import { styles } from "../style";
import ComputerCanvas from "./ComputerCanvas";
import { ParticlesContainer } from "./ParticlesContainer";

const Hero = () => {
  return (
    <section
      className={` w-full h-screen   pt-[140px] max-sm:pt-[100px] relative`}
      id="home"
    >
      <div
        className={`  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#007bff]" />
          <div className="w-1 sm:h-80 h-40 green-gradient" />
        </div>
        {/* Particle Container */}
        <ParticlesContainer></ParticlesContainer>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="blue-text-gradient">Susan Khanal</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a Technical Support Officer <br className="sm:block hidden" />I
            bring a diverse set of skills in the relam of information and
            communication Technology
          </p>

          <div className="mt-16 flex gap-10 max-md:gap-4 md:flex-row flex-col max-md:mt-10 md:items-center">
            <button
              href="#contact"
              className="btn btn-yellow slidebtn slidebtnyellow md:px-[25px] md:py-[17px] px-[5px] py-[10px] text-sm  max-md:w-[30vw] "
            >
              <a href="#contact">Contact Me</a>
            </button>

            <span
              href=""
              className="btn btn-blue slidebtn slidebtnblue md:px-[25px] md:py-[17px] px-[5px] py-[10px] text-sm  max-md:w-[40vw]"
            >
              Download Resume
            </span>
          </div>
        </div>
      </div>

      <div className="absolute sm:bottom-1 bottom-[100px] h-[60vh] w-full   max-sm:h-[30vh]">
        <ComputerCanvas />
      </div>

      <div className="absolute xs:bottom-10 bottom-14 w-full flex justify-center items-center ">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
