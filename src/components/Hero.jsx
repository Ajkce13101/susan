import { motion } from "framer-motion";
import { styles } from "../style";
import ComputerCanvas from "./ComputerCanvas";
import { ParticlesContainer } from "./ParticlesContainer";

const Hero = () => {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <section
      className={` w-full h-screen  md:pt-[40px] pt-[40px]  relative z-10`}
      id="home"
    >
      <div
        className={`  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 h-full`}
      >
        {/* <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#007bff]" />
          <div className="w-1 sm:h-80 h-40 green-gradient" />
        </div> */}
        {/* Particle Container */}
        <ParticlesContainer></ParticlesContainer>

        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="flex-1 h-full flex  flex-col justify-center  w-[50vw]"
        >
          <motion.h1
            variants={textVariants}
            className={`${styles.heroHeadText} text-white`}
          >
            Hi, I'm <span className="blue-text-gradient">Susan Khanal</span>
          </motion.h1>
          <motion.p
            variants={textVariants}
            className={`${styles.heroSubText} mt-2 text-white-100`}
          >
            I am a Technical Support Officer <br className="sm:block hidden" />I
            bring a diverse set of skills in the relam of information and
            communication Technology
          </motion.p>

          <motion.div
            variants={textVariants}
            className="mt-16 flex gap-10 max-md:gap-4 md:flex-row flex-col max-md:mt-10 md:items-center"
          >
            <motion.button
              variants={textVariants}
              href="#contact"
              className="btn btn-yellow slidebtn slidebtnyellow md:px-[25px] md:py-[14px] px-[5px] py-[10px] text-sm  max-md:w-[30vw] "
            >
              <a href="#contact">Contact Me</a>
            </motion.button>

            <motion.span
              variants={textVariants}
              href=""
              className="btn btn-blue slidebtn slidebtnblue md:px-[25px] md:py-[14px] px-[5px] py-[10px] text-sm  max-md:w-[40vw]"
            >
              Download Resume
            </motion.span>
          </motion.div>
        </motion.div>

        {/*  */}

        <div className="flex-1  h-full max-md:hidden  w-full "></div>
        <div className="flex-1 absolute h-full max-md:hidden  w-[60vw] right-0 ">
          <ComputerCanvas />
        </div>
      </div>

      <div className="absolute  bottom-14 w-full flex justify-center items-center max-md:hidden">
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
