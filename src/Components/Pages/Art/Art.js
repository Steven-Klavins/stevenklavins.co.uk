import React from "react";
import "../../Pages/Art/Art.css";
import { AnimatePresence, motion } from "framer-motion";

const Art = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="artMargin"
    >
      <h1 className="artTitle">Art</h1>
    </motion.div>
  );
};

export default Art;
