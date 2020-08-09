import React from "react";
import "../../Pages/Music/Music.css";
import OutOfContext from "../../../images/outofcontext.jpg";
import OutOfContext2 from "../../../images/outofcontext02.jpg";
import OutOfContext3 from "../../../images/outofcontext03.jpg";
import PunchingJudy from "../../../images/punchingjudy.jpg";
import PunchingJudy2 from "../../../images/punchingjudy02.jpg";
import PunchingJudy3 from "../../../images/punchingjudy03.jpg";

const Music = (props) => {
  return (
    <div className="topMargin">
      <h1 className="musicTitle">Music</h1>
      <h2 className=" musicTitle">Projects</h2>

      <h2 className="musicSubTitle">Out Of Context</h2>

      <div className="bandContentHolder">
        <iframe
          className="musicBox"
          src="https://bandcamp.com/EmbeddedPlayer/track=1912035103/size=large/bgcol=333333/linkcol=00ffff/tracklist=false/transparent=true/"
          seamless
        >
          <a href="http://outofcontext2016.bandcamp.com/track/no-faith-demo">
            No Faith (Demo) by Out Of Context
          </a>
        </iframe>

        <p className="bandmsg">
          Female fronted hard rock band from Croydon. Charliy Vaughan (Lead
          Vocals) Steven Klavins (Lead Guitar/Backing Vocals) Stephen Mussett
          (Rhythm Guitar) Ryan Nicholls (Bass Guitar) Phill Jones (Drum Kit)
        </p>

        <div>
          <img className="bandimg" src={OutOfContext2} />
          <img className="bandimg" src={OutOfContext} />
          <img className="bandimg" src={OutOfContext3} />
        </div>
      </div>

      <h2 className="musicSubTitle">Punching Judy</h2>

      <div className="bandContentHolder">
        <iframe
          className="musicBox"
          src="https://bandcamp.com/EmbeddedPlayer/album=3137507976/size=large/bgcol=333333/linkcol=00ffff/tracklist=false/transparent=true/"
          seamless
        >
          <a href="http://punchingjudy1.bandcamp.com/album/demo-2014">
            Demo 2014 by Punching Judy
          </a>
        </iframe>

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
    </div>
  );
};

export default Music;
