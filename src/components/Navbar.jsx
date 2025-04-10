import React, { useState } from "react";
import logo from "../assets/d2_logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-transparent   absolute top-0 z-50 w-full  ">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-16" alt="D'square Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            D'square
          </span>
        </a>

        {/* Hamburger Menu */}
        {/* <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button> */}

        {/* Nav Items */}
        {/* <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:block md:w-auto mt-4 md:mt-0`}
          id="navbar"
        >
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8 p-4 md:p-0">
            {["Our Menu", "Contact"].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className={`block py-2 px-3 rounded-sm ${
                    item === "Home"
                      ? "text-white bg-orange-700 md:bg-transparent md:text-orange-700 md:dark:text-orange-500"
                      : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:text-orange-500 md:dark:hover:bg-transparent"
                  } md:p-0`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
