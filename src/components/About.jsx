import React, { useRef } from "react";
import { styles } from "../style";
import { motion, useInView } from "framer-motion";
import { services } from "../constants";
import Tilt from "react-parallax-tilt";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Service = ({ title, index, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div
        variants={variants}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card hover:black-gradient"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col hover:black-gradient">
          <img src={icon} className="w-16 h-16 object-contain"></img>
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="initial"
      // whileInView="animate"
      animate={isInView && "animate"}
      id="about"
      className={`${styles.paddingX} flex flex-col items-center justify-center mb-[200px] pt-[100px]`}
    >
      <motion.div
        variants={variants}
        className="flex flex-col items-center mb-5"
      >
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <div className="flex flex-col items-center">
          <h2 className={`${styles.sectionHeadText} text-center`}>OverView</h2>
          <ul className="dottedLine ">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </motion.div>
      <motion.p
        variants={variants}
        className="text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        As a Technical Support Officer, I bring a diverse skill set and a
        passion for delivering exceptional service in the realm of information
        and communication technology. With a solid foundation in ICT, I excel in
        autonomously handling complex technical tasks and driving solutions. My
        influence extends to effective communication and collaboration, ensuring
        alignment with project objectives. Navigating intricate ICT landscapes
        is second nature to me, thanks to my adeptness at handling multifaceted
        challenges. Continuously expanding my knowledge, I stay updated on
        emerging technologies and industry trends. I leverage strong business
        acumen to translate technical insights into actionable strategies,
        delivering
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-14 items-center justify-center">
        {services.map((service, index) => (
          <Service key={service.title} index={index} {...service}></Service>
        ))}
      </div>
    </motion.div>
  );
};

export default About;
