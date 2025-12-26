import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";

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
    link: "https://dynamic-grocery.preview.emergentagent.com/",
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
    //link: "https://nexgenuniversity.vercel.app/",
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
];

const Portfolio = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {Projects.map((item, index) => (
        <div
          key={index}
          className="py-4 px-2 bg-[#141414] rounded-xl shadow-2xl border-2 border-[#1F1F1F] text-white"
        >
          <div className="">
            <img
              src={item.img}
              alt=""
              className="h-60 w-full rounded-2xl object-cover"
            />
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
                to={item.link}
                className="px-4 text-xl py-2 flex items-center gap-2 bg-[#141414] hover:bg-[#242424] cursor-pointer rounded-xl shadow-2xl border border-[#1F1F1F] text-white"
              >
                Open <MdOutlineArrowOutward />
              </Link>{" "}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
