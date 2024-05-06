import React from "react";
import { styles } from "../style";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { Tooltip } from "react-tooltip";
import "./ball.css";
import VerifiedIcon from "@mui/icons-material/Verified";

const Tech = () => {
  return (
    <div
      className={`${styles.paddingX} mx-auto pt-[200px] max-w-[1400px] pb-[100px]`}
      id="skills"
    >
      <p className={`${styles.sectionSubText} text-center`}>
        What I expertise on
      </p>
      <div className="flex flex-col items-center">
        <h2 className={`${styles.sectionHeadText} text-center`}>Skills</h2>
        <ul className="dottedLine ">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <div className="flex gap-[100px] flex-col xl:flex-row ">
        <div className=" w-full h-full flex-1 bg-tertiary p-6 rounded-xl mt-10 shadow-card ">
          <p className="blue-text-gradient font-extrabold text-2xl mb-10">
            Proficiency:
          </p>

          <div>
            <div className="flex gap-4 mb-4">
              <VerifiedIcon color="primary"></VerifiedIcon>
              <p>Ticketing Systems</p>
            </div>
            <div className="flex gap-4 mb-4">
              <VerifiedIcon color="primary"></VerifiedIcon>
              <p> Azure Active Directory (Azure AD)</p>
            </div>
            <div className="flex gap-4 mb-4">
              <VerifiedIcon color="primary"></VerifiedIcon>
              <p>Remote Desktop Software</p>
            </div>
            <div className="flex gap-4 mb-4">
              <VerifiedIcon color="primary"></VerifiedIcon>
              <p>Remote Access and VPN</p>
            </div>
            <div className="flex gap-4 mb-4">
              <VerifiedIcon color="primary"></VerifiedIcon>
              <p>Mobile Device Management (MDM) Solutions</p>
            </div>
          </div>
        </div>
        <div className=" mt-10 flex-1">
          <p className="blue-text-gradient font-extrabold text-2xl mb-10">
            Tools & Technologies:
          </p>
          <div className="flex flex-row flex-wrap justify-start gap-10">
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
                    <div
                      className="w-[80px] h-[80px] max-md:w-[70px] max-md:h-[70px] rounded-full ball "
                      key={tech.name}
                    >
                      <img
                        src={tech.icon}
                        className="p-4 max-md:p-3 z-10"
                        alt=""
                      />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
