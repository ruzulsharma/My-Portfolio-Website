import React from "react";
import { motion } from "framer-motion";

/**
 * Renders skill badges with a staggered floating animation.
 */
const FloatingSkill = ({ skills }) => {
  return (
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <motion.span
          key={skill}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: index * 0.05,
            duration: 0.4,
            type: "spring",
            stiffness: 120,
          }}
          whileHover={{
            scale: 1.15,
            y: -4,
            boxShadow: "0 0 14px rgba(252,211,77,0.5)",
            borderColor: "#fcd34d",
            color: "#fcd34d",
            transition: { duration: 0.15 },
          }}
          className="border border-[#3f3d3b] text-white text-sm font-medium px-5 py-2 rounded-full shadow-sm cursor-default"
          style={{ display: "inline-block" }}
        >
          {skill}
        </motion.span>
      ))}
    </div>
  );
};

export default FloatingSkill;
