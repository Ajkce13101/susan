import React from "react";
import { styles } from "../style";
import Lottie from "lottie-react";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";

import { lottie } from "../assets";
import ComputerCanvas from "./ComputerCanvas";

const Hero = () => {
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, translateX: 0, stagger: 0.2 });
    gsap.from("#lottie", { opacity: 0, translateX: 500, duration: 0.5 });
    gsap.from("#typeanimation", { opacity: 0, translateX: 500, duration: 0.5 });
  }, []);

  return (
    <section className={` ${styles.paddingX}   max-w-7xl mx-auto h-[100vh] `}>
      <div className="flex flex-row items-center gap-5  justify-center pt-[115px] mt-10">
        <div className="flex gap-5 items-center h-full justify-center flex-1">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
            <div className="w-1 sm:h-[280px] h-40 violet-gradient"></div>
          </div>
          <div>
            <h1
              id="hero"
              className={`${styles.heroHeadText} text-white mb-5 opacity-0 translate-x-[-200px]`}
            >
              Hi, I'm <span className="text-[#915eff]">Susan</span> Khanal
            </h1>
            <p
              id="hero"
              className={`${styles.heroSubText} mt-2 text-white-100 opacity-0 translate-x-[-200px]`}
            >
              I develop 3D visuals, user <br className="sm:block hidden" />{" "}
              interface and web applications
            </p>
            {/* <p
              id="hero"
              className="mt-10 max-w-[80%] opacity-0 translate-x-[-200px]"
            >
          
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              dignissimos itaque eum minima libero voluptatibus expedita labore,
              consectetur quod, ducimus voluptas odio perferendis dicta dolorem
              incidunt unde? Velit, possimus magni!
            </p> */}
          </div>
        </div>
        {/* <div id="lottie" className="">
          <Lottie animationData={lottie}></Lottie>
        </div> */}
      </div>
      <ComputerCanvas></ComputerCanvas>

      <div className="absolute"></div>
    </section>
  );
};

export default Hero;
