import { motion } from "framer-motion";

import { styles } from "../style";
import ComputerCanvas from "./ComputerCanvas";

const Hero = () => {
  return (
    <section className={` w-full h-screen   pt-[140px]`} id="home">
      <div
        className={`  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-green" />
          <div className="w-1 sm:h-80 h-40 green-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-green">Susan Khanal</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a Technical Support Officer <br className="sm:block hidden" />I
            bring a diverse set of skills in the relam of information and
            communication Technology
          </p>
        </div>
      </div>

      <div className="absolute sm:-bottom-1 h-[60vh] w-full   ">
        <ComputerCanvas />
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center ">
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
