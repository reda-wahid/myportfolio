import React, { useEffect, useRef } from "react";
import { NavLink, Link } from "react-router";
import { scroller } from "react-scroll";

export default function Header() {
  let navItems = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "project",
    "Contact",
  ];
  const [item, setItem] = React.useState(false);
  const headerRef = useRef();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        headerRef.current.classList.add("md:bg-[#09255280]");
        headerRef.current.classList.add("opacity-[.9]");
      } else {
        headerRef.current.classList.remove("md:bg-[#09255280]");
        headerRef.current.classList.remove("opacity-[.9]");
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleclick = () => {
    setItem(!item);
  };
  const handleScroll = (section) => {
    scroller.scrollTo(section, {
      smooth: true,
      duration: 200,
      offset: -40,
    });
  };

  return (
    <>
      <header className="w-full fixed md:top-2 left-0 z-50 ">
        <div
          ref={headerRef}
          className="w-full max-md:bg-opacity-95 md:w-[90%] mx-auto  p-3 flex justify-between items-center max-md:bg-main  backdrop-blur-sm md:rounded-full transition-all duration-300 "
        >
          <p className=" cursor-pointer bg-gradient-to-r from-primary to-secondary  bg-clip-text font-bold text-4xl text-transparent">
            RW
          </p>
          <nav className="links">
            <ul className="nav-link hidden md:flex gap-2 md:gap-5 text-white  cursor-pointer  ">
              {navItems.map((item, index) => (
                <NavLink
                  to={`${item}`}
                  key={index}
                  onClick={() => handleScroll(`${item}`)}
                >
                  <li className={`relative group font-bold p-2`}>
                    {item}
                    <span className="absolute border-active left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-gradient-to-r from-primary to-secondary transition-all duration-300  group-hover:w-full group-active:w-full"></span>
                  </li>
                </NavLink>
              ))}
            </ul>
          </nav>
          <NavLink
            className={"hidden md:block"}
            to="https://docs.google.com/document/d/1GVaVY1re1FyFhl_at38cABPY9meI1RX7mhg051pLE4w/edit?usp=sharing"
            download
          >
            <div className="flex ing-btn hover:scale-110 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e3e3e3"
              >
                <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
              </svg>
              Reseme
            </div>
          </NavLink>

          {!item ? (
            <svg
              onClick={handleclick}
              className="md:hidden size-12 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e3e3e3"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          ) : (
            <svg
              onClick={handleclick}
              className="md:hidden size-12 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e3e3e3"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          )}
        </div>
        {/* mobile menu  */}
        <div
          className={`md:hidden z-20 overflow-auto text-center absolute w-full h-[100vh] left-0 bg-main backdrop-blur-sm rounded-lg p-5 transition-all duration-300 ${item ? "top-[70px] opacity-100" : "top-[50px] opacity-0 pointer-events-none"}`}
        >
          <ul className="flex flex-col gap-11 text-white  cursor-pointer  ">
            {navItems.map((item, index) => (
              <NavLink
                onClick={() => (setItem(false), handleScroll(`${item}`))}
                to={`${item}`}
                key={index}
              >
                <li className="  border-4 border-white hover:border-primary hover:text-primary   rounded-full p-2">
                  {item}
                </li>
              </NavLink>
            ))}
          </ul>
          <NavLink
            onClick={() => setItem(false)}
            className={"mt-11 block"}
            to="https://docs.google.com/document/d/1GVaVY1re1FyFhl_at38cABPY9meI1RX7mhg051pLE4w/edit?usp=sharing"
            download
          >
            <div className="ing-btn w-full flex justify-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e3e3e3"
              >
                <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
              </svg>
              Reseme
            </div>
          </NavLink>
        </div>
      </header>
    </>
  );
}
