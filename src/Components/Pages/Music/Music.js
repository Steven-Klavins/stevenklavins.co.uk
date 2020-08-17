import React, { Suspense } from "react";
import { motion } from "framer-motion";
import "../../Pages/Music/Music.css";
import OutOfContext from "../../../images/outofcontext.webp";
import OutOfContext2 from "../../../images/outofcontext02.webp";
import OutOfContext3 from "../../../images/outofcontext03.webp";
import PunchingJudy from "../../../images/punchingjudy.webp";
import PunchingJudy2 from "../../../images/punchingjudy02.webp";
import PunchingJudy3 from "../../../images/punchingjudy03.webp";
import AudioPlayer from "../../AudioPlayer/AudioPlayer";
import cover01 from "../../../images/cover01.jpg";
import cover02 from "../../../images/cover02.jpg";
import NoFaith from "../../../Audio/music/No_Faith.mp3";
import weepingAngels from "../../../Audio/music/Weeping_Angels.mp3";

const Music = (props) => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="topMargin"
    >
      <h1 className="musicTitle">Music</h1>
      <p className="musicTextBox">
        I've been performing with various different musicians for more than 10
        years now. Progressive Metal and Hard Rock are my favorite genres,
        however, I also love Jazz, Acoustic, and anything with a good groove.
        Recently I have taken a deeper dive into the world of music production
        and I'm working on my first solo album. <br></br>
        <br></br>
        The instruments I play include, bass, guitar, a bit of piano, and I've
        also been known to do some backing vocals here and there.
      </p>

      <h2 className="musicSubTitle">Out Of Context</h2>

      <div className="bandContentHolder">
        <div className="musicBox">
          <AudioPlayer
            files={NoFaith}
            cover={cover01}
            link={"https://outofcontext2016.bandcamp.com/track/no-faith-demo"}
          />
        </div>
        <div className="musicBox"></div>
        <p className="bandmsg">
          Out Of Context is a female-fronted hard rock/metal band from Croydon
          forming in 2015. The band consists of myself (lead guitar/backing
          vocals), Charliy Vaughan (Lead Vocals) Stephen Mussett (Rhythm Guitar)
          Ryan Nicholls (Bass Guitar), and Phill Jones (Drums).
          <br></br>
          <br></br>
          In our time as a band, we have played a number of venues, written more
          than an album's worth of songs (full-release to come soon), and
          received an endorsement from{" "}
          <a
            href="http://www.stonewolfguitars.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            StoneWolf Guitars
          </a>
          . <br></br>
          <br></br>
          FaceBook <br></br>
          Instagram <br></br>
          YouTube <br></br>
        </p>

        <div>
          <img className="bandimg" src={OutOfContext2} />
          <img className="bandimg" src={OutOfContext} />
          <img className="bandimg" src={OutOfContext3} />
        </div>
      </div>

      <h2 className="musicSubTitle">Punching Judy</h2>

      <div className="bandContentHolder">
        <div className="musicBox">
          <AudioPlayer
            files={weepingAngels}
            cover={cover02}
            link={"https://punchingjudy1.bandcamp.com/"}
          />
        </div>
        <div className="musicBox"></div>
        <p className="bandmsg">
          Female fronted hard rock band from Croydon. Charliy Vaughan (Lead
          Vocals) Steven Klavins (Lead Guitar/Backing Vocals) Stephen Mussett
          (Rhythm Guitar) Ryan Nicholls (Bass Guitar) Phill Jones (Drum Kit)
        </p>

        <div>
          <img className="bandimg" src={PunchingJudy} />
          <img className="bandimg" src={PunchingJudy2} />
          <img className="bandimg" src={PunchingJudy3} />
        </div>
      </div>
    </motion.div>
  );
};

export default Music;
