import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import TiltCard from "../components/TiltCard";

const Projects = [
  {
    img: "/images/Clothing.jpg",
    title: "Clothio",
    development: "Clothing Web Platform",
    link: "",
  },
  {
    img: "/images/Grocery.jpg",
    title: "EcoGrocers",
    development: "E-Commerce Platform",
    link: "",
  },
  {
    img: "/images/Portfolio.png",
    title: "My Portfolio",
    development: "UI/UX & Web Design",
    link: "",
  },
  {
    img: "/images/NexGen.jpg",
    title: "NexGen",
    development: "University Website",
  },
  {
    img: "/images/Calculator.jpg",
    title: "Calculator",
    development: "Calculator Website",
    link: "",
  },
  {
    img: "/images/cloudyNotes.png",
    title: "Cloud Notes",
    development: "CloudNotes Website",
    link: "",
  },
   {
    img: "/images/TransactionAgent.png",
    title: "AI-powered Fraud Detection System",
    development: "AI-powered Fraud Detection System",
    link: "https://transactionaiagent.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {Projects.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.45,
            delay: index * 0.08,
            type: "spring",
            stiffness: 100,
          }}
        >
          <TiltCard className="py-4 px-2 bg-[#141414] rounded-xl shadow-2xl border-2 border-[#1F1F1F] text-white h-full">
            {/* Image with shine overlay */}
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={item.img}
                alt={item.title}
                className="h-60 w-full rounded-2xl object-cover transition-transform duration-500 hover:scale-105"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>

            <div className="flex items-start justify-between pt-5">
              <div>
                <h1 className="font-bold text-xl">{item.title}</h1>
                <h1 className="font-semibold text-gray-200 pt-1">
                  {item.development}
                </h1>
              </div>
              <div>
                <Link
                  to={item.link || "#"}
                  className="px-4 text-xl py-2 flex items-center gap-2 bg-[#141414] hover:bg-yellow-400 hover:text-black cursor-pointer rounded-xl shadow-2xl border border-[#1F1F1F] text-white transition-colors duration-200"
                >
                  Open <MdOutlineArrowOutward />
                </Link>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      ))}
    </div>
  );
};

export default Portfolio;
