import React from "react";
import LeftPage from "../pages/LeftPage";
import Navbar from "../components/Navbar";
import { useLocation, Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Layout = () => {
  const location = useLocation();
  const currentPage = location.pathname;

  const renderHeading = () => {
    switch (currentPage) {
      case "/":        return "About";
      case "/services": return "Our Services";
      case "/resume":  return "Resume";
      case "/portfolio": return "Portfolio";
      case "/contact": return "Get in Touch";
      default:         return "Welcome";
    }
  };

  return (
    <div className="relative z-10 sm:flex-row flex-col flex min-h-screen items-start gap-4 md:gap-10 justify-between p-4 md:p-10">
      {/* Left sidebar with entrance animation */}
      <motion.div
        className="md:block hidden"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
      >
        <LeftPage />
      </motion.div>

      {/* Main content panel */}
      <motion.div
        className="w-full border bg-[#171716] shadow-lg rounded-2xl flex-col border-[#3f3d3b] p-1 md:p-4 text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, type: "spring", stiffness: 80 }}
      >
        <Navbar />

        <main className="p-2 md:p-4">
          {/* Mobile heading */}
          <div className="block md:hidden mb-5">
            <h1 className="text-2xl font-semibold font-mono">{renderHeading()}</h1>
            <span className="block h-1 mt-1 w-16 bg-yellow-300"></span>
          </div>

          {/* Page transition on route change */}
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.3 }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </motion.div>
    </div>
  );
};

export default Layout;
