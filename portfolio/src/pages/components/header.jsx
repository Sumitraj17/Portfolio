import React, { useEffect, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import context from "../../context/context.jsx";

function Header() {
  const active = useContext(context);
  const handleClick = (event) => {
    console.log(event.target.textContent);
    active.update(event.target.textContent);
  };

  useEffect(() => {
    console.log(active.state);
  });

  return (
    <header className="w-5/6 mx-auto mb-8 rounded-xl p-4 bg-white bg-opacity-50 text-black text-lg shadow-2xl transition-transform duration-300 md:p-4 md:text-lg md:shadow-2xl sm:p-3 sm:text-base sm:shadow-lg xs:p-2 xs:text-sm xs:shadow-md">
      <ul className="flex flex-col md:flex-row justify-evenly items-center space-y-2 md:space-y-0 md:space-x-4 cursor-pointer">
        <li
          className={`transform transition-transform duration-300 hover:scale-110 hover:shadow-lg ${
            active.state === "About" ? "text-decoration-underline underline-2 transform transition-transform duration-300 hover:scale-110 border-b-2 border-gray-500": ""
          }`}
        >
          <Link to="/" onClick={handleClick}>
            About
          </Link>
        </li>
        <li
          className={`transform transition-transform duration-300 hover:scale-110 hover:shadow-xl ${
            active.state === "Experience" ?"text-decoration-underline underline-2 transform transition-transform duration-300 hover:scale-110 border-b-2 border-gray-500" : ""
          }`}
        >
          <Link to="/work" onClick={handleClick}>
            Experience
          </Link>
        </li>
        <li
          className={`transform transition-transform duration-300 hover:scale-110 hover:shadow-xl ${
            active.state === "Projects" ? "text-decoration-underline underline-2 transform transition-transform duration-300 hover:scale-110 border-b-2 border-gray-500" : ""
          }`}
        >
          <Link to="/projects" onClick={handleClick}>Projects</Link>
        </li>
        <li
          className={`transform transition-transform duration-300 hover:scale-110 hover:shadow-xl ${
            active.state === "Certificates" ? "text-decoration-underline underline-2 transform transition-transform duration-300 hover:scale-110 border-b-2 border-gray-500" : ""
          }`}
        >
          <Link to="/certification" onClick={handleClick}>Certificates</Link>
        </li>
        <li
          className={`transform transition-transform duration-300 hover:scale-110 hover:shadow-xl ${
            active.state === "Get in Touch" ?"text-decoration-underline underline-2 transform transition-transform duration-300 hover:scale-110 border-b-2 border-gray-500" : ""
          }`}
        >
          <Link to="/contact" onClick={handleClick}>Get in Touch</Link>
        </li>
      </ul>
      <Outlet />
    </header>
  );
}

export default Header;
