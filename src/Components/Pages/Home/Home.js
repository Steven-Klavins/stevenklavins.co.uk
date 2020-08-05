import React from "react";

import "../../Pages/Home/Home.css";

const Home = (props) => {
  return (
    <div className="topMargin">
      <h1 class="openTitle">Bridging the gap between tech and art</h1>
      <div className="welcomeTextBox">
        <h2>Welcome!</h2>
        <p>
          Thank you so much for visiting my website! I'm a full-stack developer,
          Makers academy graduate, and tech addict. I'm London based however I'm
          an experienced remote worker and have the flexibility to
          relocate/travel if need be. <br></br>
          <br></br>I hold a BA in Digital Arts, perform in a band, and have a
          love of all things creative, you can find my showreel{" "}
          <a
            className="midtextlink"
            href="https://www.youtube.com/watch?v=oNoBRIztcew"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          . If your looking for someone with a yearning to make the world a
          better place through innovative tech I'm your guy! <br></br>
          <br></br>To be frank, its what gets me out of bed in the morning. Want
          to chat? Feel free to contact me on any of the listed platforms!
        </p>
      </div>
    </div>
  );
};

export default Home;
