import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowOutward, MdClose } from "react-icons/md";
import { FaStar } from "react-icons/fa";

// ✅ UPDATE THIS whenever you push a new project
const latestProject = {
  title: "AI-powered Fraud Detection System",
  description: "AI-powered System that helps in reducing risk of  Fradulent transaction",
  img: "/images/TransactionAgent.png",
  link: "https://transactionaiagent.vercel.app/",
};

const LatestProjectWidget = () => {
  const [expanded, setExpanded] = useState(true);
  const [dismissed, setDismissed] = useState(false);
  const navigate = useNavigate();

  if (dismissed) return null;

  const handleClick = () => {
    if (latestProject.link.startsWith("http")) {
      // External link - open in new tab
      window.open(latestProject.link, "_blank", "noopener,noreferrer");
    } else {
      // Internal route - use navigate
      navigate(latestProject.link);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="bg-[#1a1a1a] border border-[#3f3d3b] rounded-2xl shadow-2xl w-64 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 pt-3 pb-1">
              <div className="flex items-center gap-2 text-yellow-300 text-xs font-bold uppercase tracking-widest">
                <FaStar size={10} />
                <span>Latest Project</span>
              </div>
              <button
                onClick={() => setDismissed(true)}
                className="text-gray-500 hover:text-white transition-colors"
                aria-label="Dismiss"
              >
                <MdClose size={16} />
              </button>
            </div>

            {/* Project image */}
            <div className="relative mx-3 mt-1 rounded-xl overflow-hidden h-32">
              <img
                src={latestProject.img}
                alt={latestProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Project info + CTA */}
            <div className="px-4 py-3">
              <p className="text-white font-bold text-sm">{latestProject.title}</p>
              <p className="text-gray-400 text-xs mt-0.5">{latestProject.description}</p>
              <button
                onClick={handleClick}
                className="mt-3 w-full flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-bold py-2 rounded-xl transition-colors duration-200"
              >
                View Project <MdOutlineArrowOutward size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating toggle button */}
      <motion.button
        onClick={() => setExpanded((prev) => !prev)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: expanded
            ? "0 0 0px rgba(252,211,77,0)"
            : [
                "0 0 0px rgba(252,211,77,0)",
                "0 0 18px rgba(252,211,77,0.7)",
                "0 0 0px rgba(252,211,77,0)",
              ],
        }}
        transition={
          expanded
            ? {}
            : { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }
        className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-bold px-4 py-2.5 rounded-full shadow-lg transition-colors duration-200"
      >
        <FaStar size={12} />
        {expanded ? "Hide" : "New Project ✨"}
      </motion.button>
    </div>
  );
};

export default LatestProjectWidget;
