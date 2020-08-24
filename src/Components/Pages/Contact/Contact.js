import React from "react";
import "../../Pages/Contact/Contact.css";
import { motion } from "framer-motion";
import CV from "../../../images/cv-logo.png";
import Download from "../../../images/download-logo.png";

const Contact = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="contactMargin"
    >
      <h1>Contact</h1>
      <p className="contactBox">
        If you would like to get in touch the best way to contact me is via
        email at{" "}
        <span>
          <a className="email" href=" mailto: stevenklavins94@gmail.com">
            stevenklavins94@gmail.com
          </a>
        </span>
        .<br></br> <br></br>
        Alternatively, you can also contact me on any of the social media
        platforms listed, links are provided below. If you would like to chat in
        real-time to ask anything please don't hesitate to contact me on
        LinkedIn.
        <br></br>
        <br></br>
        <a
          href="https://www.linkedin.com/in/steven-klavins-90b02a199/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>LinkedIn </span>
        </a>
        <a
          href="https://github.com/Steven-Klavins"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>GitHub </span>
        </a>
        <a
          href="https://twitter.com/klavinssteven"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Twitter </span>
        </a>
      </p>

      <h2 className="contactSubTitle">Looking for my CV?</h2>

      <div className="aboutLinks">
        <div className="CVLink">
          <a
            href="https://github.com/Steven-Klavins/CV"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="CVLogo" src={CV} alt="CV" img />
            <p>Link</p>
          </a>
        </div>
        <div className="CVLink">
          <a
            href="https://github.com/Steven-Klavins/CV/raw/master/Steven_Klavins_CV.pdf"
            download
          >
            <img className="CVLogo" src={Download} alt="Download" img />
            <p>Download</p>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
