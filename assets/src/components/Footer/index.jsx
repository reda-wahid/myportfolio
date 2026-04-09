import React from "react";
import { NavLink } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-black w-full ">
      <div className="text-white flex justify-evenly items-center p-4">
        <p>© 2026 Reda Wahid. Made with in Egypt</p>
        <div className="socials flex gap-5 mt-5">
          <NavLink
            to="https://www.linkedin.com/in/reda-wahid-39907220b"
            target="_blank"
          >
            <img
              src="image/icon-icons.png"
              alt="LinkedIn"
              className="w-12 h-12 rounded-full  hover:scale-110 transition-all duration-300"
            />
          </NavLink>
          <NavLink to="https://github.com/reda-wahid" target="_blank">
            <img
              src="image/github.png"
              alt="GitHub"
              className="w-12 h-12 rounded-full  hover:scale-110 transition-all duration-300"
            />
          </NavLink>
        </div>
      </div>
    </footer>
  );
}
