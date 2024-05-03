import React from "react";
import { styles } from "../style";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { Tooltip } from "react-tooltip";
import "./ball.css";

const Tech = () => {
  return (
    <div className={`${styles.padding} mx-auto pt-[100px]`} id="work">
      <p className={`${styles.sectionSubText} text-center`}>
        What I expertise on
      </p>
      <h2 className={`${styles.sectionHeadText} text-center`}>
        Tools & Technology
      </h2>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        <Tooltip
          id="my-tooltip"
          style={{ backgroundColor: "white", color: "black" }}
        />
        {technologies.map((tech) => {
          return (
            <a
              data-tooltip-id="my-tooltip"
              data-tooltip-content={tech.name}
              data-tooltip-variant="info"
            >
              <div className="state">
                <div className="w-20 h-20  rounded-full ball " key={tech.name}>
                  <img src={tech.icon} className="p-4 z-10" alt="" />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Tech;
