import React from "react";
import { styles } from "../style";
import { motion } from "framer-motion";
import { services } from "../constants";
import Tilt from "react-parallax-tilt";

const Service = ({ title, index, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} className="w-16 h-16 object-contain"></img>
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </div>
    </Tilt>
  );
};

const About = () => {
  return (
    <div
      id="about"
      className={`${styles.paddingX} flex flex-col items-center justify-center mb-[200px] pt-[100px]`}
    >
      <div className="flex flex-col items-center mb-5">
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <div className="flex flex-col items-center">
          <h2 className={`${styles.sectionHeadText} text-center`}>OverView</h2>
          <ul className="dottedLine ">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <p className="text-secondary text-[17px] max-w-3xl leading-[30px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        voluptatibus recusandae repudiandae porro architecto! Nisi rerum soluta
        saepe voluptatibus nihil, tempore atque. Ratione atque quia modi,
        facilis unde recusandae alias, aliquam accusamus quisquam, repellendus
        libero officiis temporibus dolores facere odit? Veritatis nihil aperiam
        repellat necessitatibus quia minus saepe? Unde, asperiores.
      </p>

      <div className="mt-20 flex flex-wrap gap-14 items-center justify-center">
        {services.map((service, index) => (
          <Service key={service.title} index={index} {...service}></Service>
        ))}
      </div>
    </div>
  );
};

export default About;
