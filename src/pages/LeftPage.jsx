import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const LeftPage = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -3;
    const rotateY = ((x - centerX) / centerX) * 3;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      className="w-full sm:w-96 border bg-[#171716] shadow-lg rounded-2xl flex items-center justify-center flex-col border-[#3f3d3b] p-4 text-white transition-transform duration-200 ease-out"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-[#514b43] rounded-4xl">
        <img src="/images/bitemoji.png" alt="" className="w-48" />
      </div>
      <div className="text-2xl font-semibold mt-8">
        <p>RUZUL SHARMA</p>
      </div>
      <div className="text-white bg-[#292828] inset-2/5  px-3 py-1 rounded-lg mt-6">
        <p className="font-semibold">Full Stack Developer</p>
      </div>

      <span className="border-t border-gray-400 h-2 w-[80%] mt-5"></span>

      <div className="flex items-start jsutify-start flex-col gap-2 ">
        <div className="flex text-sm items-start gap-4 mt-4">
          <div className="bg-[#514b43] text-yellow-300 p-2 rounded-xl">
            <MdOutlineMail size={22} />
          </div>
          <div>
            <p className="font-semibold">Email</p>
            <p className="pt-1">ruzulsharma007@gmail.com</p>
          </div>
        </div>
        <div className="flex text-sm items-start gap-4 mt-4">
          <div className="bg-[#514b43] text-yellow-300 p-2 rounded-xl">
            <IoPhonePortraitOutline size={22} />
          </div>
          <div>
            <p className="font-semibold">Phone</p>
            <p className="pt-1">+91 8882022481</p>
          </div>
        </div>
        {/* <div className="flex text-sm items-start gap-4 mt-4">
          <div className="bg-[#514b43] text-yellow-300 p-2 rounded-xl">
            <MdOutlineDateRange size={22} />
          </div>
           <div>
            <p className="font-semibold">Birthday</p>
            <p className="pt-1">10 September, 2002</p>
          </div> 
        </div> */}
        <div className="flex text-sm items-start gap-4 mt-4">
          <div className="bg-[#514b43] text-yellow-300 p-2 rounded-xl">
            <FaLocationDot size={22} />
          </div>
          <div>
            <p className="font-semibold">Location</p>
            <p className="pt-1">Greater Noida</p>
          </div>
        </div>
      </div>

      <div className="flex text-yellow-300 items-center text-xl gap-4 mt-5 justify-center">
        <Link to={"https://github.com/ruzulsharma"}>
          <FaGithub className="hover:scale-125 transition-transform duration-200" />
        </Link>
        <Link to={"https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"}>
          <FaLinkedin className="hover:scale-125 transition-transform duration-200" />
        </Link>
      </div>
    </div>
  );
};

export default LeftPage;
