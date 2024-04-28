import React from "react";
import { styles } from "../style";
import Lottie from "lottie-react";

import { lottie } from "../assets";

const Hero = () => {
  return (
    <section className="  ${styles.paddingX}   max-w-7xl mx-auto h-[100vh] ">
      <div className="flex flex-row items-center gap-5 h-full justify-center">
        <div className="flex gap-5 items-center h-full justify-center flex-1">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
            <div className="w-1 sm:h-96 h-40 violet-gradient"></div>
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white mb-5`}>
              Hi, I'm <span className="text-[#915eff]">Susan</span> Khanal
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop 3D visuals, user <br className="sm:block hidden" />{" "}
              interface and web applications
            </p>
            <p className="mt-10 max-w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              dignissimos itaque eum minima libero voluptatibus expedita labore,
              consectetur quod, ducimus voluptas odio perferendis dicta dolorem
              incidunt unde? Velit, possimus magni!
            </p>
          </div>
        </div>
        <div className="">
          <Lottie animationData={lottie}></Lottie>
        </div>
      </div>
    </section>
  );
};

export default Hero;
