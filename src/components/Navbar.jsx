import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();

  const currentPage = location.pathname;

  const renderHeading = () => {
    switch (currentPage) {
      case "/":
        return "About";
      case "/services":
        return "Our Services";
      case "/resume":
        return "Resume";
      case "/portfolio":
        return "Portfolio";
      case "/contact":
        return "Get in Touch";
      default:
        return "Welcome";
    }
  };

  return (
    <div className="flex items-center justify-between p-2 md:p-4 relative text-white">
      {/* Heading */}
      <div className="md:block hidden">
        <h1 className="text-2xl font-semibold font-mono">{renderHeading()}</h1>
        <span className="block h-1 mt-1 w-16 bg-yellow-300"></span>
      </div>

      <div className="flex items-center  md:hidden">
        <div className="">
          <img src="/images/bitemoji.png" alt="" className="w-16" />
        </div>
        <div className="text-md font-semibold mt-2">
          <p>RUZUL</p>
        </div>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-x-10">
        <Link to="/" className="hover:text-yellow-300">
          About
        </Link>
        <Link to="/resume" className="hover:text-yellow-300">
          Resume
        </Link>
        <Link to="/services" className="hover:text-yellow-300">
          Services
        </Link>
        <Link to="/portfolio" className="hover:text-yellow-300">
          Portfolio
        </Link>
        <Link to="/contact" className="hover:text-yellow-300">
          Contact
        </Link>
      </nav>

      {/* Hamburger Icon */}
      <div className="md:hidden cursor-pointer">
        <CgMenuRightAlt size={28} onClick={() => setOpenMenu(true)} />
      </div>


      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#0E0D0D] text-white transform transition-transform duration-300 ease-in-out z-50 ${
          openMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Icon */}
        <div className="flex justify-between items-center p-4">
          <div className="">
            <img src="/images/bitemoji.png" alt="" className="w-16" />
          </div>
          <CgClose
            size={28}
            className="cursor-pointer font-extrabold"
            onClick={() => setOpenMenu(false)}
          />
        </div>

        {/* Sidebar Content */}
        <div className="px-6">
          <ul className="space-y-4">
            <li>
              <Link to="/" onClick={() => setOpenMenu(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/resume" onClick={() => setOpenMenu(false)}>
                Resume
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={() => setOpenMenu(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/portfolio" onClick={() => setOpenMenu(false)}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setOpenMenu(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
