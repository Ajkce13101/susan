import React, { useEffect, useState } from "react";

import { styles } from "../style";
import { navLinks } from "../constants";
import { susanLogo, susanLogoBlue, menu, closeBlack } from "../assets";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logo, setLogo] = useState(susanLogo);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
        setLogo(susanLogoBlue);
      } else {
        setScrolled(false);
        setLogo(susanLogo);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const variants = {
    open: {
      clipPath: `circle(1000px at 80% 5.2%)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    },
    close: {
      clipPath: "circle(0px at 80% 5.2%)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  const listVarient = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    close: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };
  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    close: {
      y: 50,
      opacity: 0,
    },
  };
  return (
    <nav
      className={`${
        styles.paddingX
      } nav w-full flex items-center  transition-all ease-in-out duration-1000 fixed top-0 z-20 ${
        scrolled ? "bg-white py-2" : "bg-transparent py-5"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto ">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p
            className={` ${
              scrolled ? "text-primary" : "text-white"
            }  text-[18px] font-bold cursor-pointer flex`}
          >
            Susan &nbsp;
            <span className="sm:block hidden"> | Khanal</span>
          </p>
        </Link>

        <ul className="list-none hidden md:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <Link
              activeClass="active"
              to={nav.id}
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
            >
              <li
                key={nav.id}
                className={`
              ${scrolled ? "text-tertiary" : "text-secondary"}
              text-[18px] font-medium cursor-pointer relative links`}
              >
                <a>
                  {nav.title} <span></span>
                </a>
              </li>
            </Link>
          ))}
        </ul>

        <div className="md:hidden flex flex-1 justify-end items-center relative ">
          <div className="bg-white rounded-full p-1.5 z-20 shadow-lg shadow:primary">
            <img
              src={toggle ? closeBlack : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain  "
              onClick={() => setToggle(!toggle)}
            />
          </div>

          <motion.div
            animate={toggle ? "open" : "close"}
            className={`flex p-6  fixed top-0 right-0  min-w-[240px] z-10  h-full max-sm:w-[50vw] `}
          >
            <motion.div className="background  absolute " variants={variants} />
            <motion.ul
              variants={listVarient}
              className="list-none flex justify-center items-center flex-1 flex-col  w-full text-center gap-12 delay-1000"
            >
              {navLinks.map((nav) => (
                <Link
                  activeClass="active"
                  to={nav.id}
                  spy={true}
                  smooth={true}
                  offset={10}
                  duration={500}
                >
                  <motion.li
                    variants={itemVariants}
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px]  w-full h-[5vh] flex items-center justify-center links  ${
                      active === nav.title ? "text-black" : "text-tertiary"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a className="w-full h-full text-center flex items-center justify-center relative font-semibold">
                      {nav.title} <span></span>
                    </a>
                  </motion.li>
                </Link>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
