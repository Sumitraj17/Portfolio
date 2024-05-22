import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaGithub, FaLinkedin,FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-5/6 rounded-2xl ml-8 mr-8 p-4 bg-gray-700 text-gray-200 text-sm shadow-2xl flex justify-around flex-col md:flex-row  ">
      <ul className="flex text-sm mb-2 ml-3 md:mb-0 md:ml-0">
        <li className="flex justify-center items-center"><b>Contact Me:- </b> rajsumit1793@gmail.com</li>
      </ul>
      <span className="flex justify-center items-center mb-2 md:mb-0">Made with &#9829; by Sumit</span>
      <ul className="flex justify-center items-center">
        <li className="transform transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:text-blue-500 mr-2 ">
          <a
            href="https://github.com/Sumitraj17"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
        </li>
        <li className="mr-2 transform transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:text-blue-500">
          <a
            href="https://www.linkedin.com/in/sumit-raj-8043ba229/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
        </li>
        <li className="transform transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:text-blue-500">
          <a
            href="https://www.instagram.com/dark_eyes008?utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} />
          </a>
        </li>
      </ul>
      <Outlet />
    </footer>
  );
}

export default Footer;
