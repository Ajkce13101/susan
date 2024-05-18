import React, { useEffect, useRef, useState } from "react";

import { styles } from "../style"

import menu from "../assets/menu.png";
import closeBlack from "../assets/closeBlack.png";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar.scss";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skill",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
        navref.current.classList.add("stickyNav");
      } else {
        setScrolled(false);
        navref.current.classList.remove("stickyNav");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    initial: {
      scale: 0,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const variants = {
    open: {
      clipPath: `circle(1300px at 80% 5.2%)`,
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

  const navref = useRef();
  return (
    <nav
      ref={navref}
      className={`${
        styles.paddingX
      } nav w-full flex items-center  transition-all ease-in-out duration-1000 fixed top-0 z-20 ${
        scrolled ? "bg-white py-2" : "bg-transparent py-5"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto ">
        <motion.div variants={navVariants} initial="initial" animate="animate">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <p
              className={`  font-bold cursor-pointer flex logo transition-all dura`}
            >
              <span
                className={` ${
                  scrolled ? "text-3xl" : "text-4xl"
                } transition-all duration-500 text-[#007bff] `}
              >
                Aj
              </span>
              <span
                className={` ${
                  scrolled ? "text-black text-3xl" : "text-white text-4xl"
                } transition-all duration-500`}
              >
                aya
              </span>
            </p>
          </Link>
        </motion.div>

        <motion.ul
          variants={navVariants}
          initial="initial"
          animate="animate"
          className="list-none hidden md:flex flex-row gap-10"
        >
          {navLinks.map((nav) => (
            <Link
              activeClass="active"
              to={nav.id}
              spy={true}
              smooth={true}
              duration={500}
              key={nav.id}
            >
              <motion.li
                variants={navVariants}
                key={nav.id}
                className={`
              ${scrolled ? "text-black font-bold text-[16px]" : "text-white"}
              text-[18px] font-medium cursor-pointer relative links`}
              >
                {nav.title} <span></span>
              </motion.li>
            </Link>
          ))}
        </motion.ul>

        <div className="md:hidden flex flex-1 justify-end items-center relative ">
          <motion.div
            variants={navVariants}
            initial="initial"
            animate="animate"
            className="bg-white rounded-full p-1.5 z-20 shadow-lg shadow:primary"
          >
            <img
              src={toggle ? closeBlack : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain  "
              onClick={() => setToggle(!toggle)}
            />
          </motion.div>

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial="close"
                animate={toggle ? "open" : "close"}
                exit="close"
                className={` flex p-6  fixed top-0 right-0  min-w-[240px] z-10  h-full max-sm:w-[50vw] `}
              >
                <motion.div
                  className="background  absolute "
                  variants={variants}
                />
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
                      className={`${
                        toggle
                          ? "visible"
                          : "invisible transition-all duration-500 delay-200"
                      }`}
                    >
                      <motion.li
                        variants={itemVariants}
                        key={nav.id}
                        className={`  font-poppins font-medium cursor-pointer text-[16px]  w-full h-[5vh] flex items-center justify-center links  ${
                          active === nav.title ? "text-black" : "text-black"
                        }`}
                        onClick={() => {
                          setToggle(!toggle);
                          setActive(nav.title);
                        }}
                      >
                        <a
                          className={`flex w-full h-full text-center  items-center justify-center relative font-semibold`}
                        >
                          {nav.title} <span></span>
                        </a>
                      </motion.li>
                    </Link>
                  ))}
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;