import React from "react";
import { styles } from "../style";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { Tooltip } from "react-tooltip";

const Tech = () => {
  return (
    <div className={`${styles.paddingX} mx-auto pt-[100px]`} id="work">
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
              <div className="w-28 h-28 " key={tech.name}>
                <BallCanvas icon={tech.icon}></BallCanvas>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Tech;
