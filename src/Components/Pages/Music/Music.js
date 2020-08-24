import React from "react";
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
      <h1>Music</h1>
      <p className="musicTextBox">
        For more than 10 years a large chunk of my social life has been
        performing with musicians and attending gigs. My favorite genres are
        Progressive Metal and Hard Rock, however, I also love Jazz, Acoustic,
        and anything that holds a good groove. In the past year, I have taken a
        deeper dive into the world of music production and I'm producing my
        first solo album. <br></br>
        <br></br>
        The instruments I play include bass, guitar, a bit of piano, and some
        backing vocals here and there. In addition to this, I like to compose. I
        by no means can play every piece in an orchestral arrangement but with a
        bit of time and some MIDI software, I'm sure I could come up with
        something regardless of the instrument or genre!
      </p>

      <h2 className="musicSubTitle">Out Of Context (2016-present)</h2>

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
          Out Of Context is a female-fronted hard Rock/Metal band from Croydon
          forming in 2015. The band consists of myself (lead guitar/backing
          vocals), Charliy Vaughan (Lead Vocals), Stephen Mussett (Rhythm
          Guitar), Ryan Nicholls (Bass Guitar), and Phill Jones (Drums).
          <br></br>
          <br></br>
          In our time as a band, we have played a number of London venues,
          written more than an album's worth of songs, and received an
          endorsement from{" "}
          <a
            className="musicLink"
            href="http://www.stonewolfguitars.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            StoneWolf Guitars
          </a>
          .<br></br>
          <br></br>I feel incredibly privileged to work with the individuals in
          this band, they are like family to me. The band as of recent has been
          on hiatus due to a number of complications but it's by no means out of
          action, keep an eye on our social platforms and you will no doubt see
          new things to come! <br></br>
          <br></br>
          <a
            className="musicLink"
            href="https://www.facebook.com/outofcontextmusic"
            target="_blank"
            rel="noopener noreferrer"
          >
            FaceBook{" "}
          </a>{" "}
          <br></br>
          <a
            className="musicLink"
            href="https://www.instagram.com/outofcontext15/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram{" "}
          </a>{" "}
          <br></br>
          <a
            className="musicLink"
            href="https://www.youtube.com/channel/UCIg9HuvOjMi6P1-zssztDsA"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube{" "}
          </a>{" "}
          <br></br>
          <a
            className="musicLink"
            href="https://www.youtube.com/playlist?list=PL6oBrhak8fSCD03MT0lXw-rhKIQdGoHR-"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Videos{" "}
          </a>
          <br></br>
          <a
            className="musicLink"
            href="https://outofcontext2016.bandcamp.com/track/no-faith-demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bandcamp{" "}
          </a>
          <br></br>
        </p>

        <div>
          <img className="bandimg" src={OutOfContext2} alt="Out Of Context" />
          <img className="bandimg" src={OutOfContext} alt="Out Of Context" />
          <img className="bandimg" src={OutOfContext3} alt="Out Of Context" />
        </div>
      </div>

      <h2 className="musicSubTitle">Punching Judy (2011-2015)</h2>

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
          Punching Judy was a Hard Rock band formed over 10 years ago, it became
          the first full-fledged music project I was a part of when I joined in
          2011. The band had a number of line ups and was disbanded in 2015.{" "}
          <br></br>
          <br></br>
          Upon joining the line up consisted of myself (Lead Guitar/Backing
          Vocals), Hannah Nicholls (Lead Vocals), Stephen Mussett (Rhythm
          Guitar) Richard Mensah (Bass Guitar) later to be Ryan Nicholls, and
          Phill Jones (Drum Kit).
          <br></br>
          <br></br>
          <a
            className="musicLink"
            href="https://www.youtube.com/channel/UCJZLDK8xuc9ItQM_Cf7CR8w/videos"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube{" "}
          </a>
          <br></br>
          <a
            className="musicLink"
            href="https://www.youtube.com/playlist?list=PL6oBrhak8fSBartaSKv-b4hbc6nA2ejim"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Videos{" "}
          </a>
          <br></br>
          <a
            className="musicLink"
            href="https://punchingjudy1.bandcamp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bandcamp{" "}
          </a>
          <br></br>
        </p>

        <div>
          <img className="bandimg" src={PunchingJudy} alt="Punching Judy" />
          <img className="bandimg" src={PunchingJudy2} alt="Punching Judy" />
          <img className="bandimg" src={PunchingJudy3} alt="Punching Judy" />
        </div>
      </div>
    </motion.div>
  );
};

export default Music;
