import React, { useState } from "react";
import "./Navbar.scss";
import { Link, animateScroll as scroll } from "react-scroll";
import { styles } from "../style";
import { susanLogo, susanLogoBlue } from "../assets";

function Navbar() {
  const [imgSrc, setImgSrc] = useState(susanLogo);
  const [logoTextClass, setlogoTextClass] = useState("text-white");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      document.querySelector(".nav").classList.add("stickingNav");
      setImgSrc(susanLogoBlue);
      setlogoTextClass("text-primary");
    } else {
      document.querySelector(".nav").classList.remove("stickingNav");
      setImgSrc(susanLogo);
      setlogoTextClass("text-white");
    }
  });

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const openNav = () => {
    document.querySelector(".nav").classList.toggle("responsive");
    document.body.classList.toggle("body-fixed");
    document.querySelector(".menu").classList.toggle("visible");
    document
      .querySelector(".stickingNav")
      .classList.toggle("sticky-responsive");
  };

  return (
    <div className="nav ">
      <div className={`${styles.paddingX} wrapper max-w-[1400px] mx-auto`}>
        <div className="flex justify-between ">
          {/* Left side Navbar */}

          <div className="nav_Left">
            <div className="row flex gap-2">
              <img
                src={imgSrc}
                alt="logo"
                className="w-14 h-14 object-contain"
              ></img>
              <p
                className={` ${logoTextClass} text-[18px] cursor-pointer font-semibold `}
              >
                Susan <span className="sm:block hidden">| Khanal</span>
              </p>
            </div>
          </div>

          {/* Right Side Navbr */}
          <div className="nav_Right">
            <div className="icons">
              <ul className="menu">
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                >
                  <li className="nav-items ">
                    <a href="">
                      {" "}
                      Home <span></span>
                    </a>
                  </li>
                </Link>

                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                >
                  <li className="nav-items">
                    <a href="">
                      About <span></span>
                    </a>
                  </li>
                </Link>

                <Link
                  activeClass="active"
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                >
                  <li className="nav-items">
                    <a href="">
                      Education <span></span>
                    </a>
                  </li>
                </Link>
                <Link
                  activeClass="active"
                  to="work"
                  spy={true}
                  smooth={true}
                  duration={1000}
                >
                  <li>
                    <a href="">
                      Experience <span></span>
                    </a>
                  </li>
                </Link>
                <Link
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                >
                  <li className="nav-items">
                    <a href="">
                      Skills <span></span>
                    </a>
                  </li>
                </Link>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                >
                  <li>
                    <a href="">
                      Contact <span></span>
                    </a>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div
            className="nav-container nav-container-visible "
            onClick={openNav}
          >
            <input className="checkbox" type="checkbox" name="" id="" />

            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
