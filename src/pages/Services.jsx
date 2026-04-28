import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-lg font-semibold md:pt-5">
        Whatever we take on, whether it's a product, website, or brand, it's
        never just for show. It's designed to work hard, deliver real value, and
        never coast on aesthetics.
      </p>
    </motion.div>
  );
};

export default Services;
