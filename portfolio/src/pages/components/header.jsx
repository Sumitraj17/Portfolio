import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Header() {
  return (
    <header className="ml-8 mr-8 p-4 bg-gray-700 text-white text-lg shadow-2xl">
      <ul className="flex flex-col md:flex-row justify-evenly items-center space-y-2 md:space-y-0 md:space-x-4 cursor-pointer">
        <li className="transform transition-transform duration-300 hover:scale-110  hover:shadow-lg">
          <Link to="/">Home</Link>
        </li>
        <li className="transform transition-transform duration-300 hover:scale-110 hover:shadow-xl">
          <Link to="/work">Work Experience</Link>
        </li>
        <li className="transform transition-transform duration-300 hover:scale-110 hover:shadow-xl">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="transform transition-transform duration-300 hover:scale-110 hover:shadow-xl">
          <Link to="/certification">Certificates</Link>
        </li>
        <li className="transform transition-transform duration-300 hover:scale-110  hover:shadow-xl">
          <Link to="/contact">Get in Touch</Link>
        </li>
        {/* Uncomment and adjust the following if you want to include GitHub and LinkedIn links
        <li className="transform transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:text-blue-500">
          <a href="https://github.com/Sumitraj17" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
        </li>
        <li className="transform transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:text-blue-500">
          <a href="https://www.linkedin.com/in/sumit-raj-8043ba229/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
        </li> 
        */}
      </ul>
      <Outlet />
    </header>
  );
}

export default Header;
