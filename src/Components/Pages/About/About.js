import React from "react";
import "../../Pages/About/About.css";
import AboutImg from "../../../images/about-photo.jpg";
import AboutImg2 from "../../../images/about-photo2.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="aboutMargin"
    >
      <h1>About</h1>
      <p className="aboutBox">
        Thank you so much for taking the time out of your day to find out a
        little more about me. My name is Steven (most call me Steve) and I'm
        presently based in London (UK). I'm 26 years old, a lover of everything
        tech, music, and art. In late 2019 I left the stability of my job in
        pursuit of doing something more meaningful with my life. Following my
        resignation, I taught myself OOP principles, attended Makers academy,
        and immersed myself in learning. <br></br> <br></br>I'm a musician, a
        horror movie nerd, and enjoy watching documentaries and most things
        animated. I'm not a huge sports fan but I love swimming and was a
        voluntary swimming teacher once upon a time. I suppose you could say I'm
        a quirky individual, I embrace alternative culture and have a taste for
        gothic fashion and Prog-Metal. I enjoy having conversations with those
        who think a little different, the world would be a boring place if we
        were all the same right?
      </p>
      <div className="imageContainer">
        <img className="aboutImg" src={AboutImg} alt="Steven Klavins"></img>
        <img className="aboutImg" src={AboutImg2} alt="Steven Klavins"></img>
      </div>
    </motion.div>
  );
};

export default About;
