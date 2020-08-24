import React, { Component, Suspense } from "react";
import "../../Pages/Home/Home.css";
import { motion } from "framer-motion";
import queryString from "query-string";
import { Link } from "react-router-dom";
const IntroAnimation = React.lazy(() =>
  import("../../IntroAnimation/IntroAnimation")
);

export default class Home extends Component {
  render() {
    const value = queryString.parse(this.props.location.search);
    const name = value.name;
    return (
      <motion.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className="topMargin"
      >
        <h1>Bridging the gap between tech and art</h1>
        <h2>Welcome {name}</h2>
        <div className="welcomeTextBox">
          <p>
            Thank you so much for visiting my website! I'm a full-stack
            developer,{" "}
            <a
              className="midTextLink"
              href="https://makers.tech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Makers academy
            </a>{" "}
            graduate, and tech addict. I'm presently based in south London (UK)
            however I'm an experienced remote worker and have the flexibility to
            relocate/travel if need be. <br></br>
            <br></br>I hold a BA in Digital Arts, perform in a band, and have a
            love of all things creative. If you're looking for someone with high
            ambition, an eagerness to learn, and the desire to make the world a
            better place through tech I'm your guy! <br></br>
            <br></br>To be frank, its what gets me out of bed in the morning.
            Want to chat? Feel free to contact me on any of the listed platforms
            below or visit my{" "}
            <Link className="midTextLink" to="/contact">
              contact page
            </Link>{" "}
            for further details.
          </p>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <div>
            <IntroAnimation />
          </div>
        </Suspense>
      </motion.div>
    );
  }
}
