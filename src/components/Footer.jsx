import React from "react";
import { styles } from "../style";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./footer.css";

function Footer() {
  return (
    <footer
      className={`  bg-black  py-2 mx-auto flex items-center justify-center`}
    >
      <div
        className={`${styles.paddingX} flex justify-between w-full items-center max-w-[1400px] max-md:flex-col`}
      >
        <div className=" text-center text-[16px] max-sm:text-[14px] ">
          <p className="copyright-text ">
            Created By <span className="text-green font-semibold">Susan</span> |
            &copy; 2024 All rights reserved
          </p>
          <p className="Footer__message">
            <strong className="Footer__bold">&lt;/&gt;</strong> with{" "}
            <span className="Footer__bold">🧡</span>
          </p>
        </div>
        <div>
          <ul className="header-social">
            <li>
              <a href="#" className="rounded-circle github-link">
                {" "}
                <GitHubIcon className="github" />
              </a>
            </li>
            <li>
              <a href="#" className="rounded-circle linkedIn-link">
                {" "}
                <LinkedInIcon className="linkedIn" />
              </a>
            </li>
            <li>
              <a href="#" className="rounded-circle facebook-link">
                {" "}
                <FacebookIcon className="facebook" />
              </a>
            </li>
            <li>
              <a href="#" className="rounded-circle twitter-link">
                {" "}
                <TwitterIcon className="twitter" />
              </a>
            </li>
            <li>
              <a href="#" className="rounded-circle youtube-link">
                {" "}
                <YouTubeIcon className="youtube " />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
