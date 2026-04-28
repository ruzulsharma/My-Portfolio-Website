import React from "react";
import {
  FaLaptopCode,
  FaCameraRetro,
  FaPaintBrush,
  FaVideo,
} from "react-icons/fa";
import { motion } from "framer-motion";
import TechOrb from "../components/TechOrb";
import TiltCard from "../components/TiltCard";

const testimonials = [
  {
    image: "/images/testimoalboy.png",
    name: "Rahul Sharma",
    testimonial:
      "Working with this team was a game-changer for our online presence. The website they delivered was not only visually stunning but also incredibly easy to use. Their eye for detail and design sensibility is top-notch. Our customer engagement has grown significantly since the redesign.",
  },
  {
    image: "/images/testimonalgirl.png",
    name: "Priya Menon",
    testimonial:
      "From the first call to final delivery, the entire experience was smooth and professional. Their ability to transform our brand vision into a digital experience exceeded our expectations. The photography and design quality they brought to our project was simply outstanding.",
  },
];

// const Testimonals = () => {
//   return (
//     <>
//       <div className="bg-[#252423] relative shadow-lg rounded-2xl px-5 pt-14 pb-8">
//         <div className=" absolute bottom-36 w-fit flex items-baseline gap-x-4 justify-center ">
//           <div className="bg-[#514b43]  rounded-4xl">
//             <img src="/images/bitemoji.png" alt="" className="w-24" />
//           </div>
//           <p className="text-xl font-bold">Rohit patil</p>
//         </div>
//         <div className="py-4 text-lg font-semibold">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo atque
//           sapiente placeat, necessitatibus quidem modi ex dignissimos maiores ut
//           pariatur perspiciatis nobis omnis assumenda quibusdam.
//         </div>
//       </div>
//     </>
//   );
// };

const serviceCards = [
  {
    icon: <FaPaintBrush />,
    title: "Web Design",
    desc: "Creative, user-focused designs that balance aesthetics and usability to deliver an exceptional user experience.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    desc: "High-performance, responsive, and secure websites built with modern technologies and clean code practices.",
  },
  {
    icon: <FaCameraRetro />,
    title: "Photography",
    desc: "Professional photography services capturing stunning visuals that tell compelling stories.",
  },
  {
    icon: <FaVideo />,
    title: "Video Editing",
    desc: "Dynamic and engaging video edits tailored to enhance your brand message and captivate your audience.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Research",
    desc: "Academic Research Paper — Conducted in-depth research and implemented a Deep Learning model (U-Net/Semantic Segmentation) utilizing Python with specialized libraries for image processing and geospatial data analysis.",
  },
];

const About = () => {
  return (
    <>
      {/* Hero section with 3D orb */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <p className="text-lg font-semibold md:pt-5">
            I am Ruzul Sharma, a results-oriented Backend Developer with over two years of intensive, hands-on experience mastering Java, Spring Boot, MongoDB, and related backend technologies. I excel at architecting and developing robust, high-performance systems, consistently achieving efficiency gains, such as reducing API response times by 25% through targeted optimization.
          </p>
          <p className="text-lg font-semibold py-4 md:py-2">
            My expertise centers on creating secure and scalable applications, utilizing Spring Security for authentication and authorization, and designing highly optimized REST APIs for modern microservice architectures. I am proficient in MongoDB, handling large datasets (50K+ records) by implementing smart, optimized indexing strategies.
          </p>
          <p className="text-lg font-semibold py-4 md:py-2">
            I bring proven skills in advanced third-party API integrations, including cutting-edge technologies like the ChatGPT API and various Vision APIs, demonstrating a strong ability to weave AI capabilities into core system functionality.
          </p>
        </motion.div>

        {/* 3D Orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-shrink-0"
        >
          <TechOrb size={200} />
        </motion.div>
      </div>

      <div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-bold text-2xl mt-4 py-2"
        >
          What I'm Doing
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 py-4 md:p-4 gap-x-4 gap-y-10">
          {serviceCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <TiltCard className="gap-x-4 border w-full md:w-[80%] bg-[#171716] shadow-2xl rounded-2xl text-start border-[#3f3d3b] p-4 text-white">
                <div className="flex space-y-2">
                  <span className="text-yellow-300 text-xl md:text-2xl mr-2 md:mr-4">
                    {card.icon}
                  </span>
                  <h2 className="text-sm md:text-lg font-semibold">{card.title}</h2>
                </div>
                <p className="pt-1">{card.desc}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="font-bold text-2xl mt-4 py-2"
        >
          Testimonials
        </motion.h1>
        <div className="flex items-start flex-col md:flex-row py-20 gap-x-4 gap-y-20 md:gap-y-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index + 0.6 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="bg-[#252423] relative shadow-lg rounded-2xl px-5 pt-14 pb-8">
                <div className="absolute -top-8 md:bottom-40 w-fit md:pb-4 flex items-baseline gap-x-2 md:gap-x-4 justify-center">
                  <div className="bg-[#514b43] rounded-2xl">
                    <img src={item.image} alt="" className="w-16 md:w-24" />
                  </div>
                  <p className="text-sm md:text-xl font-bold">{item.name}</p>
                </div>
                <div className="py-1 md:py-4 text-sm md:text-lg font-normal md:font-semibold">
                  {item.testimonial}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div></div>
    </>
  );
};

export default About;
