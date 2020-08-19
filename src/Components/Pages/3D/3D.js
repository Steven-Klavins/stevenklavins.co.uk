import React from "react";
import { motion } from "framer-motion";
import "../../Pages/3D/3D.css";

const threeD = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="threeDMargin"
    >
      <h1 className="threeDTitle">3D Modelling/Printing</h1>
    </motion.div>
  );
};

export default threeD;
