import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../style";
import { navLinks } from "../constants";
import { susanLogo, susanLogoBlue, menu, closeBlack } from "../assets";

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

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
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

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div className="bg-white rounded-full p-1.5 z-20 shadow-lg shadow:primary">
            <img
              src={toggle ? closeBlack : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain  "
              onClick={() => setToggle(!toggle)}
            />
          </div>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-white fixed top-0 right-0  min-w-[240px] z-10  h-full max-sm:w-[50vw] `}
          >
            <ul className="list-none flex justify-center items-center flex-1 flex-col  w-full text-center gap-12">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px]  w-full h-[5vh] flex items-center justify-center  ${
                    active === nav.title ? "text-black" : "text-tertiary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a
                    className="w-full h-full text-center flex items-center justify-center"
                    href={`#${nav.id}`}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
