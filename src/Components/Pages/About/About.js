import React from "react";
import "../../Pages/About/About.css";
import AboutImg from "../../../images/about-photo.jpg";
import { AnimatePresence, motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="aboutMargin"
    >
      <h1 className="aboutTitle">About</h1>
      <p className="aboutBox">
        Thank you so much for taking the time out of your day to find out a
        little more about me. My name is Steven (most call me Steve) and I'm
        presently based in London (UK). I'm 26 years old, a lover of everything
        tech, music, and art. In late 2019 I left the stability of my job in
        pursuit of doing something more meaningful with my life. Following my
        resignation, I taught myself OOP principles, attended Makers academy,
        and immersed myself in learning. <br></br> <br></br>I'm a musician and
        play guitar in my band Out Of Context, I love old school horror movies
        and animation. I'm not a huge sports fan but I love swimming and was a
        voluntary swimming teacher a few years ago. I suppose you could say I'm
        a quirky individual, I embrace alternative culture. I love gothic
        fashion and Prog Metal, but hey, the world would be a boring place if we
        were all the same right?
      </p>
      <img className="aboutImg" src={AboutImg}></img>
    </motion.div>
  );
};

export default About;
