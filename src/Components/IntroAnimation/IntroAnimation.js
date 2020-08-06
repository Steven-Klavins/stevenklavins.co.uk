import React from "react";
import "../../Components/IntroAnimation/IntroAnimation.css";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const container = {
  start: {
    transition: {
      staggerChildren: 0.5,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const circlesAnimation = {
  start: {
    y: "0%",
  },
  end: {
    y: "24%",
  },
};

const bounce = {
  duration: 2,
  yoyo: Infinity,
  ease: "easeInOut",
};

const IntroAnimation = () => {
  return (
    <div className="animationHolder">
      <AnimatePresence onExitComplete>
        <motion.div
          key="contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="animatePosition">
            <motion.div
              className="bounce"
              variants={container}
              initial="start"
              animate="end"
            >
              <motion.span
                className="code"
                variants={circlesAnimation}
                transition={bounce}
              />
              <motion.span
                className="printer"
                variants={circlesAnimation}
                transition={bounce}
              />
              <motion.span
                className="art"
                variants={circlesAnimation}
                transition={bounce}
              />
              <motion.span
                className="music"
                variants={circlesAnimation}
                transition={bounce}
              />
              <motion.span
                className="camera"
                variants={circlesAnimation}
                transition={bounce}
              />
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default IntroAnimation;
