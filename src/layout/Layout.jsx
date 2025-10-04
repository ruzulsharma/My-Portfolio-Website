import React from "react";
import LeftPage from "../pages/LeftPage";
import Home from "../pages/Home";
import style from "./Layout.module.css";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Layout = () => {
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
    <div className="sm:flex-row flex-col flex min-h-screen items-start gap-4 md:gap-10 justify-between p-4 md:p-10">
      <div className="md:block hidden">
        <LeftPage />
      </div>
      <div className="w-full border bg-[#171716] shadow-lg rounded-2xl flex-col border-[#3f3d3b] p-1 md:p-4 text-white">
        <div className="">
          <Navbar />
        </div>
        {/* Main content area should be dynamic bg-[#eaf6ff]*/}
        <main className="p-2 md:p-4">
          <div className="block md:hidden mb-5">
            <h1 className="text-2xl font-semibold font-mono">
              {renderHeading()}
            </h1>
            <span className="block h-1 mt-1 w-16 bg-yellow-300"></span>
          </div>

          {/* Dynamic content */}
          <div>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
